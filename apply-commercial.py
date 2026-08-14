"""One-shot rewrite: from "licence" to "bought once", and say which agents it feeds.

Kept in the repository rather than a scratch directory because the last copy of
this script lived in /tmp and was swept before it was committed — an hour of
copywriting with it. Anything worth running twice belongs next to what it edits.

Run once from the repository root:  python3 apply-commercial.py
It is idempotent: every replacement is anchored on text that only exists before
the change.
"""

import pathlib

ROOT = pathlib.Path(__file__).parent
MAIL = 'alex.connectedmate@gmail.com'
MAIL_OLD = 'alex.cormeraie@gmail.com'

index = ROOT / 'index.html'
s = index.read_text()

s = s.replace(MAIL_OLD, MAIL)

# ── The hero says whose agent it feeds ──────────────────────────────────────
s = s.replace(
    '''      Annotate any page, restyle it live, wireframe a component — and hand your coding
      agent one message it can act on. No screenshots in Slack, no "the blue button
      under the second card, no, the other one".''',
    '''      Annotate any page, restyle it live, wireframe a component — and get one precise
      prompt to paste into <strong>whatever AI you already code with</strong>: Claude Code,
      Codex, Cursor, OpenCode. No screenshots in Slack, no "the blue button under the
      second card, no, the other one".''')

# ── A band that answers "does this replace my agent?" before it is asked ────
agents_band = '''
<section id="agents" style="padding-top:46px; padding-bottom:46px">
  <div class="wrap">
    <p class="eyebrow">Whatever you already use</p>
    <h2>It does not replace your AI. It writes its prompt.</h2>
    <p class="body">
      Annotate Kit has no model, no API key and no opinion about which agent you should
      use. What comes out is text — one precise, structured prompt — so it works the same
      whether you paste it, pipe it over MCP, or send it to a webhook.
    </p>
    <div class="agents">
      <span class="agent">Claude Code</span>
      <span class="agent">Codex</span>
      <span class="agent">Cursor</span>
      <span class="agent">OpenCode</span>
      <span class="agent">Copilot</span>
      <span class="agent">Windsurf</span>
      <span class="agent">Your own agent</span>
    </div>
    <p class="body" style="margin-top:18px">
      The gain is upstream of the model: a prompt that already carries the element, the
      component, the file and the line does not send your agent hunting through the repo —
      which is where the tokens and the iterations go.
    </p>
  </div>
</section>
'''
if 'id="agents"' not in s:
    s = s.replace('<section id="why">', agents_band + '\n<section id="why">')

# ── Bought once, not rented ─────────────────────────────────────────────────
if '<section id="licence">' in s:
    start = s.index('<section id="licence">')
    end = s.index('<footer>')
    purchase = '''<section id="buy">
  <div class="wrap">
    <p class="eyebrow">What it costs</p>
    <h2>Bought once. Yours for good.</h2>
    <p class="body">
      No subscription, no seat counting, no meter running while you think. You buy Annotate
      Kit once and the version you bought is yours for life, on as many applications as you
      like. Updates are the only thing paid again — and only if you want them.
    </p>

    <div class="split">
      <div class="panel">
        <h4 style="color:var(--blue)">Use it</h4>
        <p><strong>Install and configure.</strong> Transports, kinds, features, locales,
        your own taxonomy, your own chrome. Everything documented, on any number of
        applications.</p>
      </div>
      <div class="panel">
        <h4 style="color:var(--blue)">Adapt it</h4>
        <p><strong>Change it so it fits your stack.</strong> Modify the source, keep it
        private, re-theme it, wire it to your own agents and pipelines. What you build on
        top stays yours.</p>
      </div>
    </div>

    <div class="honest">
      <h3>Could you build this yourself?</h3>
      <p>
        Yes. It is not magic — a browser overlay, a CSS inspector, a prompt builder. What
        you would be buying is the year that came before it.
      </p>
      <ul>
        <li>Built with people who vibe-code inside real companies, and designers who came
        from brands where the details get argued over.</li>
        <li>Close to a billion tokens spent in R&amp;D getting the output right — most of it
        on discovering what an agent actually needs to be told, and what sends it
        searching instead.</li>
        <li>The awkward parts are already done: shadow DOM and event ordering, reading a
        project's own palette, interaction states, screen widths, and batching the result
        into work an agent can run in parallel.</li>
      </ul>
      <p>
        Renting software is dead and we are not going to pretend otherwise. What you pay
        for is time and taste, once.
      </p>
    </div>

    <p class="body" style="margin-top:30px">
      Adapting only pays off if the next release does not undo your work, so the package
      publishes a versioned <strong>contract</strong>: the API, the DOM attributes and the
      extension points that will not break inside a major version.
    </p>
<pre><span class="c"># set it up — writes your config and a brief for your own agent</span>
npx annotate-kit init

<span class="c"># when you take an update — says what moved, before it breaks</span>
npx annotate-kit upgrade
</pre>
    <p class="body">
      <code>init</code> reads your codebase, asks what it cannot detect — framework, design
      system, where feedback should go, where your engineering rules live — and writes
      <code>annotate-kit.config.js</code> plus <code>ANNOTATE-KIT.md</code>, a brief your own
      coding agent uses to finish the integration in your idiom. Every choice lives in that
      one file, so taking an update is a version bump instead of a merge.
    </p>

    <div class="licence-cta">
      <div>
        <h3>Buy it</h3>
        <p>Tell us your stack and how many people will use it. We answer with a price and a
        build — no form, no demo call unless you want one.</p>
      </div>
      <a class="btn btn--blue btn--big"
         href="mailto:''' + MAIL + '''?subject=Annotate%20Kit&amp;body=Hello%2C%0A%0AWe%20would%20like%20to%20buy%20Annotate%20Kit.%0A%0A-%20Company%3A%20%0A-%20Stack%20(framework%2C%20styling)%3A%20%0A-%20People%20who%20would%20use%20it%3A%20%0A-%20Use%20it%20or%20adapt%20it%3A%20%0A%0AThank%20you.">
        Get in touch
      </a>
    </div>
  </div>
</section>

'''
    s = s[:start] + purchase + s[end:]

# ── Wording everywhere else ─────────────────────────────────────────────────
s = s.replace('<a href="#cost">Cost</a>', '<a href="#cost">Why it costs less</a>\n      <a href="#buy">Price</a>')
s = s.replace('>Licence<', '>Buy<')
s = s.replace('>Get a licence<', '>Buy it<')
s = s.replace('>Ask for a licence<', '>Get in touch<')
s = s.replace('Get a licence', 'Buy it')

# ── Styles for the two new blocks ───────────────────────────────────────────
styles = '''
  /* ── Which agent ─────────────────────────────────────────────────────── */
  .agents { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 22px; }
  .agent {
    border: 1px solid var(--line); background: var(--card); border-radius: 999px;
    padding: 9px 15px; font-size: 14.5px; color: var(--ink-2);
  }

  /* ── The honest block ────────────────────────────────────────────────── */
  /* The objection everyone has, answered before they have to say it out loud.
     Hiding from "we could build this ourselves" makes it louder; meeting it is
     what makes the price defensible. */
  .honest {
    margin-top: 26px; padding: 26px 28px; border-radius: var(--radius);
    border: 1px solid var(--line); background: var(--card);
  }
  .honest h3 { font-size: 21px; }
  .honest p { color: var(--ink-2); margin-top: 12px; }
  .honest ul { margin-top: 14px; padding-left: 0; list-style: none; display: grid; gap: 10px; }
  .honest li { position: relative; padding-left: 26px; color: var(--ink-2); font-size: 16px; }
  .honest li::before {
    content: ''; position: absolute; left: 0; top: 8px; width: 12px; height: 12px;
    border-radius: 4px; border: 2.5px solid var(--blue); background: #fff;
  }
'''
if '.honest {' not in s:
    s = s.replace('  /* ── Licence call to action ──', styles + '\n  /* ── Purchase call to action ──')

index.write_text(s)

for name in ('try.html', 'README.md'):
    p = ROOT / name
    t = p.read_text()
    t = t.replace(MAIL_OLD, MAIL)
    t = t.replace('Get a licence', 'Buy it')
    t = t.replace('Ask for a licence', 'Get in touch')
    p.write_text(t)

readme = ROOT / 'README.md'
t = readme.read_text()
t = t.replace('''**The product itself is not here.** Annotate Kit is a commercial, source-available
product: the source lives in a private repository and is available under licence.''',
'''**The product itself is not here.** Annotate Kit is a commercial, source-available
product: the source lives in a private repository. You buy it once — no subscription, no
seat counting — and the version you bought is yours for good. Updates are paid separately,
and only if you want them.''')
t = t.replace('| **Use licence** |', '| **Use it** |')
t = t.replace('| **Adapt licence** |', '| **Adapt it** |')
t = t.replace('Adapting is only worth buying if upgrades stay cheap',
              'Adapting only pays off if updates stay cheap')
t = t.replace('**Buy it:** [', '**Buy it:** [')
t = t.replace('**Get a licence:** [', '**Buy it:** [')
readme.write_text(t)

print('applied')
