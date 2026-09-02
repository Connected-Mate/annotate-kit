/*
  Scan-to-message.

  Two jobs, one file.

  1. The number is never in the served HTML. A harvester that reads markup and
     does not run scripts finds an email address and nothing else: the WhatsApp
     buttons ship with a mailto: fallback and a data-wa key saying which
     conversation they start, and the real link is assembled here at runtime
     from digits held apart. It is a deterrent, not a vault — the same position
     this site takes on the demo build — but it is the difference between being
     in every scraped list and being in none of the cheap ones.
     What people read on the page is the WhatsApp handle, @alexandre.cormeraie.

  2. On a phone a wa.me link is already right: it opens WhatsApp. On a desktop
     it is not — it bounces the visitor to WhatsApp Web, a QR screen and a login
     they may not have. So on pointer devices the link opens a small dialog with
     a QR code instead: the visitor points their own phone at their own screen
     and lands in the conversation, message already written.

  No framework, no CDN: qrcode.min.js is vendored next to this file, and the
  styles are injected here, so a page only ever adds two <script> tags.
*/
(function () {
  'use strict';

  var HANDLE = '@alexandre.cormeraie';

  /* Held as code points so the number is not a searchable string in this file
     either. Assembled once, at the moment a link is built. */
  var DIGITS = [51, 51, 55, 56, 50, 49, 53, 48, 52, 51, 56];

  function number() {
    return String.fromCharCode.apply(String, DIGITS);
  }

  /* One opening line per button. Short on purpose: it is the QR payload as well,
     and it is about to be typed on a phone. */
  var MESSAGES = {
    buy:     "Hello Alex, I'd like to buy Annotate Kit.",
    licence: "Hello Alex, I'd like a licence for Annotate Kit.",
    custom:  "Hello Alex, I'd like something like Annotate Kit, but built for us."
  };

  function link(key) {
    var msg = MESSAGES[key] || MESSAGES.licence;
    return 'https://' + 'wa' + '.me/' + number() + '?text=' + encodeURIComponent(msg);
  }

  /* A desktop pointer, and not a tablet pretending to be one. Phones keep the
     native link: showing a QR code on the device you would scan it with is a
     joke at the visitor's expense. */
  function isDesktop() {
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) return false;
    if (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform)) return false; // iPad in desktop mode
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  var STYLE = [
    '.waq-scrim{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;',
      'padding:24px;background:rgba(11,11,12,.58);backdrop-filter:saturate(140%) blur(6px);',
      'opacity:0;transition:opacity 200ms cubic-bezier(.16,1,.3,1)}',
    '.waq-scrim.is-open{opacity:1}',
    '.waq-card{position:relative;width:min(380px,100%);background:#fff;color:#0B0B0C;border-radius:22px;',
      'padding:30px 30px 26px;text-align:center;box-shadow:0 30px 80px rgba(11,11,12,.34);',
      'font-family:-apple-system,"SF Pro Text",system-ui,"Segoe UI",Roboto,sans-serif;',
      'transform:translateY(10px) scale(.985);transition:transform 220ms cubic-bezier(.16,1,.3,1)}',
    '.waq-scrim.is-open .waq-card{transform:none}',
    '.waq-card h3{margin:0;font-size:21px;font-weight:700;letter-spacing:-.03em;line-height:1.15}',
    '.waq-card p{margin:9px 0 0;font-size:15px;line-height:1.5;color:#6B6F77}',
    '.waq-code{margin:22px auto 0;width:236px;height:236px;padding:13px;border-radius:16px;',
      'background:#fff;border:1px solid #E7E7EC;display:flex;align-items:center;justify-content:center}',
    '.waq-code img,.waq-code canvas{display:block;width:100%!important;height:100%!important}',
    '.waq-handle{margin-top:18px;font-size:15.5px;font-weight:700;letter-spacing:-.01em}',
    '.waq-web{display:inline-flex;align-items:center;gap:7px;margin-top:14px;font-size:14.5px;',
      'font-weight:600;color:#0A84FF;text-decoration:none}',
    '.waq-web:hover{text-decoration:underline}',
    '.waq-close{position:absolute;top:12px;right:12px;width:32px;height:32px;border:0;border-radius:50%;',
      'background:rgba(11,11,12,.06);color:#3C3F45;font-size:17px;line-height:1;cursor:pointer;',
      'display:flex;align-items:center;justify-content:center;transition:background 140ms ease}',
    '.waq-close:hover{background:rgba(11,11,12,.12)}',
    '.waq-close:focus-visible,.waq-web:focus-visible{outline:2px solid #0A84FF;outline-offset:3px}',
    '@media (prefers-reduced-motion: reduce){.waq-scrim,.waq-card{transition:none}}'
  ].join('');

  function injectStyle() {
    if (document.getElementById('waq-style')) return;
    var el = document.createElement('style');
    el.id = 'waq-style';
    el.textContent = STYLE;
    document.head.appendChild(el);
  }

  var openScrim = null;
  var lastFocus = null;

  function close() {
    if (!openScrim) return;
    var scrim = openScrim;
    openScrim = null;
    scrim.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    document.removeEventListener('keydown', onKeydown, true);
    window.setTimeout(function () { scrim.remove(); }, 220);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKeydown(e) {
    if (!openScrim) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    /* Two focusable controls, so the trap is a loop between them. */
    var focusable = openScrim.querySelectorAll('button, a[href]');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function open(key) {
    if (openScrim) close();
    injectStyle();
    lastFocus = document.activeElement;
    var href = link(key);

    var scrim = document.createElement('div');
    scrim.className = 'waq-scrim';

    var card = document.createElement('div');
    card.className = 'waq-card';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('aria-label', 'Message me on WhatsApp');

    var close_ = document.createElement('button');
    close_.className = 'waq-close';
    close_.type = 'button';
    close_.setAttribute('aria-label', 'Close');
    close_.textContent = '✕';
    close_.addEventListener('click', close);

    var title = document.createElement('h3');
    title.textContent = 'Scan to message me';

    var lead = document.createElement('p');
    lead.textContent = 'Point your phone at this code. WhatsApp opens on my account, with your message already started.';

    var code = document.createElement('div');
    code.className = 'waq-code';

    var handle = document.createElement('div');
    handle.className = 'waq-handle';
    handle.textContent = HANDLE;

    var web = document.createElement('a');
    web.className = 'waq-web';
    web.href = href;
    web.target = '_blank';
    web.rel = 'noopener';
    web.textContent = 'Or open WhatsApp on this computer →';
    web.addEventListener('click', close);

    card.appendChild(close_);
    card.appendChild(title);
    card.appendChild(lead);
    card.appendChild(code);
    card.appendChild(handle);
    card.appendChild(web);
    scrim.appendChild(card);

    scrim.addEventListener('click', function (e) { if (e.target === scrim) close(); });

    document.body.appendChild(scrim);
    document.documentElement.style.overflow = 'hidden';
    openScrim = scrim;

    /* If the encoder failed to load, the dialog still has the handle and the
       WhatsApp Web link — it degrades to a contact card, not an empty box. */
    if (typeof QRCode === 'function') {
      new QRCode(code, {
        text: href,
        width: 420,
        height: 420,
        colorDark: '#0B0B0C',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.M
      });
      var img = code.querySelector('img');
      if (img) img.alt = 'QR code opening a WhatsApp conversation with ' + HANDLE;
    } else {
      code.remove();
    }

    document.addEventListener('keydown', onKeydown, true);
    window.requestAnimationFrame(function () {
      scrim.classList.add('is-open');
      close_.focus();
    });
  }

  function wire() {
    var links = document.querySelectorAll('a[data-wa]');
    var desktop = isDesktop();

    for (var i = 0; i < links.length; i++) {
      (function (a) {
        var key = a.getAttribute('data-wa');

        /* On a phone the anchor becomes a real WhatsApp link, so a long-press,
           "open in new tab" and the status bar all behave normally. On desktop
           the href is left as the mailto fallback and the click is handled. */
        if (!desktop) { a.href = link(key); return; }

        a.setAttribute('role', 'button');
        a.addEventListener('click', function (e) {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // let people open it their way
          e.preventDefault();
          open(key);
        });
      })(links[i]);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
