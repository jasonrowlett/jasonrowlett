#!/usr/bin/env python3
import os

src = '/root/.claude/uploads/dcce8418-514a-4c9b-bf0a-bbfc64c774eb/641819ce-concourse_final.html'
dst = '/home/user/jasonrowlett/concourse_final.html'

with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. CSS additions ──────────────────────────────────────────────────────────
new_css = """  /* PAGE SYSTEM */
  .page-view{display:none;padding:20px 24px}
  .page-view.active{display:block}
  .main-content.hidden{display:none}
  .page-section{margin-bottom:32px}
  .page-title{font-family:var(--font-mono);font-size:16px;font-weight:600;color:var(--text);letter-spacing:.05em;margin-bottom:4px}
  .page-subtitle{font-family:var(--font-mono);font-size:10px;color:var(--dim);margin-bottom:24px;letter-spacing:.15em}
  .page-h2{font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;margin-bottom:10px;padding-bottom:5px;border-bottom:1px solid var(--border)}
  .page-body{font-size:12px;color:var(--muted);line-height:1.7;max-width:700px}
  .page-body p{margin-bottom:10px}
  .page-body ul{margin-left:18px;margin-bottom:10px}
  .page-body li{margin-bottom:5px}
  .page-body a{color:var(--accent);text-decoration:none}
  .page-body a:hover{text-decoration:underline}
  .data-table{width:100%;max-width:700px;border-collapse:collapse;margin:10px 0 18px}
  .data-table th{font-family:var(--font-mono);font-size:10px;color:var(--dim);letter-spacing:.1em;text-align:left;padding:6px 10px;border-bottom:1px solid var(--border);text-transform:uppercase}
  .data-table td{font-size:11px;color:var(--muted);padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
  .data-table td:first-child{font-family:var(--font-mono);font-weight:600;color:var(--text);white-space:nowrap}
  /* PRICING */
  .pricing-wrap{max-width:820px}
  .pricing-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
  @media(max-width:600px){.pricing-grid{grid-template-columns:1fr}}
  .pricing-card{background:var(--surface);border:1px solid var(--border);padding:24px}
  .pricing-card.premium{border-color:var(--accent);background:rgba(0,200,255,.03)}
  .pricing-tier{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;color:var(--muted);text-transform:uppercase;margin-bottom:6px}
  .pricing-tier.tier-premium{color:var(--accent)}
  .pricing-price{font-family:var(--font-mono);font-size:26px;font-weight:600;color:var(--text);margin-bottom:3px}
  .pricing-cadence{font-family:var(--font-mono);font-size:10px;color:var(--dim);margin-bottom:18px}
  .pricing-divider{height:1px;background:var(--border);margin-bottom:14px}
  .pricing-items{list-style:none;margin-bottom:22px}
  .pricing-items li{font-size:12px;color:var(--muted);padding:5px 0;display:flex;gap:8px;align-items:flex-start}
  .pricing-items li::before{content:'\\2014';color:var(--dim);flex-shrink:0;font-family:var(--font-mono)}
  .premium-items li::before{content:'\\2713';color:var(--green);font-weight:700}
  .pricing-cta{width:100%;padding:10px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;border:1px solid var(--border2);background:transparent;color:var(--muted)}
  .pricing-cta.cta-premium{background:var(--accent);color:#000;border-color:var(--accent)}
  .pricing-cta:hover:not(:disabled){opacity:.85}
  .pricing-cta:disabled{cursor:default;opacity:.5}
  /* FOOTER OVERRIDE */
  footer{padding:20px 24px;border-top:1px solid var(--border);background:var(--surface);display:block}
  .footer-inner{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .footer-brand{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.15em;color:var(--accent);margin-bottom:5px}
  .footer-desc{font-family:var(--font-mono);font-size:10px;color:var(--dim);margin-bottom:10px}
  .footer-links{display:flex;flex-wrap:wrap;gap:0}
  .footer-links a{font-family:var(--font-mono);font-size:10px;color:var(--dim);text-decoration:none;margin-right:14px;margin-bottom:3px;cursor:pointer;letter-spacing:.05em}
  .footer-links a:hover{color:var(--muted)}
  .footer-disclaimer{font-family:var(--font-mono);font-size:10px;color:var(--dim);line-height:1.6;max-width:380px;text-align:right}
  @media(max-width:700px){.footer-disclaimer{text-align:left;max-width:100%}}
  .contact-link{color:var(--accent);text-decoration:none}
  .contact-link:hover{text-decoration:underline}
"""
content = content.replace('</style>', new_css + '</style>', 1)

# ── 2. Nav ────────────────────────────────────────────────────────────────────
content = content.replace(
    '<nav><a class="active">Overview</a><a>Sectors</a><a>Protocols</a><a>Intelligence</a><a>Watchlist</a><a>Methodology</a></nav>',
    '<nav>'
    '<a id="nav-overview" class="active" onclick="navigateTo(\'overview\')">Overview</a>'
    '<a id="nav-sectors" onclick="navigateTo(\'sectors\')">Sectors</a>'
    '<a id="nav-protocols" onclick="navigateTo(\'protocols\')">Protocols</a>'
    '<a id="nav-intelligence" onclick="navigateTo(\'intelligence\')">Intelligence</a>'
    '<a id="nav-watchlist" onclick="navigateTo(\'watchlist\')">Watchlist</a>'
    '<a id="nav-methodology" onclick="navigateTo(\'methodology\')">Methodology</a>'
    '</nav>',
    1
)

# ── 3. Subscribe button ───────────────────────────────────────────────────────
content = content.replace(
    '<button class="subscribe-btn">Subscribe</button>',
    '<button class="subscribe-btn" onclick="navigateTo(\'subscribe\')">Subscribe</button>',
    1
)

# ── 4. Footer ─────────────────────────────────────────────────────────────────
old_footer = (
    '<footer>\n'
    '  <div class="footer-left">FORETOKEN CONCOURSE &middot; Independent Intelligence on Tokenized Private Markets<br>Credit &middot; Transparency &middot; Liquidity &middot; Macro Exposure &middot; Operational Strength</div>\n'
    '  <div class="footer-right">Research derived from publicly available information.<br>Not investment advice. For informational purposes only.</div>\n'
    '</footer>'
)
new_footer = (
    '<footer>\n'
    '  <div class="footer-inner">\n'
    '    <div>\n'
    '      <div class="footer-brand">FORETOKEN CONCOURSE</div>\n'
    '      <div class="footer-desc">Independent analytical intelligence on tokenized private markets.</div>\n'
    '      <div class="footer-links">\n'
    '        <a onclick="navigateTo(\'methodology\')">Methodology</a>\n'
    '        <a onclick="navigateTo(\'about\')">About</a>\n'
    '        <a onclick="navigateTo(\'contact\')">Contact</a>\n'
    '        <a onclick="navigateTo(\'privacy\')">Privacy</a>\n'
    '        <a onclick="navigateTo(\'terms\')">Terms</a>\n'
    '        <a onclick="navigateTo(\'subscribe\')">Subscribe</a>\n'
    '      </div>\n'
    '    </div>\n'
    '    <div class="footer-disclaimer">Foretoken Concourse ratings are independent analytical opinions and do not constitute investment advice. Foretoken is not a registered investment adviser.</div>\n'
    '  </div>\n'
    '</footer>'
)
content = content.replace(old_footer, new_footer, 1)

# ── 5. Page containers ────────────────────────────────────────────────────────
content = content.replace(
    '<div class="main-content" id="mc"></div>',
    '<div class="main-content" id="mc"></div>\n'
    '<div class="page-view" id="page-methodology"></div>\n'
    '<div class="page-view" id="page-about"></div>\n'
    '<div class="page-view" id="page-contact"></div>\n'
    '<div class="page-view" id="page-privacy"></div>\n'
    '<div class="page-view" id="page-terms"></div>\n'
    '<div class="page-view" id="page-subscribe"></div>',
    1
)

# ── 6. renderAll() – add section IDs ─────────────────────────────────────────
content = content.replace(
    "function renderAll(){document.getElementById('mc').innerHTML=[renderSectors(),renderWatchlist(),renderMacro(),renderIntel(),renderProtocols()].join('')}",
    "function renderAll(){document.getElementById('mc').innerHTML="
    "['<div id=\"section-sectors\">'+renderSectors()+'</div>',"
    "'<div id=\"section-watchlist\">'+renderWatchlist()+'</div>',"
    "'<div id=\"section-macro\">'+renderMacro()+'</div>',"
    "'<div id=\"section-intel\">'+renderIntel()+'</div>',"
    "'<div id=\"section-protocols\">'+renderProtocols()+'</div>'].join('')}",
    1
)

# ── 7. Replace nav click handler with full page system ────────────────────────
old_nav_handler = (
    "document.querySelectorAll('nav a').forEach(function(a){"
    "a.addEventListener('click',function(){"
    "document.querySelectorAll('nav a').forEach(function(x){x.classList.remove('active')});"
    "this.classList.add('active')})});"
)

new_page_system = r"""
// === STATIC PAGES ===
function renderMethodology(){
  var h='<div class="page-section">';
  h+='<div class="page-title">Methodology</div><div class="page-subtitle">FORETOKEN CONCOURSE — ANALYTICAL FRAMEWORK</div>';
  h+='<div class="page-section"><div class="page-h2">Purpose</div><div class="page-body">';
  h+='<p>Foretoken Concourse provides independent analytical ratings on tokenized private market assets — tokenized Treasuries, private credit, trade finance, real estate, tokenized equities, and precious metals. Our ratings assess risk across five analytical pillars, derived exclusively from publicly available information.</p>';
  h+='<p>Concourse ratings are designed for institutional and sophisticated investors seeking a structured, consistent framework to evaluate the emerging tokenized asset class. They are analytical opinions, not recommendations to buy or sell.</p>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Sector Rating Framework</div><div class="page-body">';
  h+='<p>Sector ratings provide a top-level assessment of an entire tokenized asset category. They are derived from the weighted average of covered protocol scores, adjusted for sector-level qualitative factors, macro conditions, or structural features that apply across all covered protocols simultaneously.</p>';
  h+='<p>Sector ratings use the same letter-grade scale as protocol ratings and reflect a category\'s aggregate risk profile — not an endorsement of any individual protocol within the sector.</p>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Protocol Rating Framework</div><div class="page-body">';
  h+='<p>Protocol ratings are assigned to individual tokenized asset issuers and infrastructure protocols. Each protocol is assessed independently across five pillars. Ratings reflect publicly available information at the time of assessment and are subject to revision as new information becomes available.</p>';
  h+='<p>Protocol ratings use qualitative descriptors (IG, IG+, MOD, UR, WD) or letter grades depending on analytical context. Letter grades correspond to the rating scale below.</p>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Five Analytical Pillars</div><div class="page-body">';
  h+='<table class="data-table"><thead><tr><th>Pillar</th><th>Weight</th><th>What We Assess</th></tr></thead><tbody>';
  h+='<tr><td>Credit</td><td>30%</td><td>Underlying borrower quality, collateral structure, default risk, and credit loss history. In fully collateralized protocols, assesses collateral integrity rather than borrower solvency.</td></tr>';
  h+='<tr><td>Transparency</td><td>20%</td><td>Public disclosure quality — audits, reserve attestations, borrower-level reporting, smart contract documentation, and governance communication. Ranges from observable (deal-level disclosure) to impaired (interfaces that load but do not populate data).</td></tr>';
  h+='<tr><td>Liquidity</td><td>20%</td><td>Redemption mechanics, secondary market depth, withdrawal window constraints, and performance under stress. Tokenization improves transfer speed; it does not inherently improve underlying asset liquidity.</td></tr>';
  h+='<tr><td>Macro Exposure</td><td>15%</td><td>Sensitivity to interest rate policy, geopolitical disruption, FX risk, and sector-specific macro drivers. Includes directional assessment of whether current conditions are favorable or adverse for the protocol\'s value proposition.</td></tr>';
  h+='<tr><td>Operational</td><td>15%</td><td>Governance maturity, audit engagement, counterparty relationships, regulatory compliance posture, team continuity, and operational infrastructure relative to the protocol\'s claimed risk profile.</td></tr>';
  h+='</tbody></table></div></div>';
  h+='<div class="page-section"><div class="page-h2">Scoring Scale</div><div class="page-body">';
  h+='<table class="data-table"><thead><tr><th>Score</th><th>Label</th><th>Meaning</th></tr></thead><tbody>';
  h+='<tr><td>5</td><td>Strong</td><td>Best-in-class for the tokenized RWA sector. Meets or exceeds institutional standards.</td></tr>';
  h+='<tr><td>4</td><td>Moderate–Strong</td><td>Above average. Material strengths with limited residual concerns.</td></tr>';
  h+='<tr><td>3</td><td>Moderate</td><td>Adequate. Neither a primary strength nor a critical weakness. Monitoring warranted.</td></tr>';
  h+='<tr><td>2</td><td>Constrained / Elevated</td><td>Below adequate. Material gap or structural deficiency requiring disclosure.</td></tr>';
  h+='<tr><td>1</td><td>Critical / Failing</td><td>Fundamental failure in this dimension. Floor rule triggered.</td></tr>';
  h+='</tbody></table></div></div>';
  h+='<div class="page-section"><div class="page-h2">Weightings</div><div class="page-body">';
  h+='<p>The five-pillar weighted score (ws) is calculated as: <strong>ws = (Credit × 0.30) + (Transparency × 0.20) + (Liquidity × 0.20) + (Macro Exposure × 0.15) + (Operational × 0.15)</strong>.</p>';
  h+='<p>Weighted scores range from 1.00 (all pillars failing) to 5.00 (all pillars strong). Approximate score-to-grade mapping: 4.5+ → AA/AAA range; 3.8–4.5 → A range; 3.1–3.8 → BBB range; 2.7–3.1 → BB+ range; 2.3–2.7 → BB range; 2.0–2.3 → BB− range; below 2.0 → B/CCC range.</p>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Floor Rules</div><div class="page-body">';
  h+='<p>Floor rules prevent high scores in one pillar from compensating for critical failures in another.</p>';
  h+='<ul><li><strong>Score 1 in any pillar:</strong> Caps the overall rating at BB (below investment grade), regardless of weighted score.</li>';
  h+='<li><strong>Score 2 in Credit or Liquidity:</strong> Applies additional scrutiny. May cap at BBB− depending on sector context and weighted score.</li>';
  h+='<li><strong>Qualitative override:</strong> Where the quantitative framework does not capture a material qualitative factor (e.g., sovereign credit quality premium, wind-down status), Foretoken applies a documented qualitative adjustment with explicit rationale.</li></ul>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Rating Scale</div><div class="page-body">';
  h+='<table class="data-table"><thead><tr><th>Rating</th><th>Category</th><th>Meaning</th></tr></thead><tbody>';
  h+='<tr><td><span class="rating-badge rating-aa">AAA / AA</span></td><td>Investment Grade — High</td><td>Exceptional or very strong across all five pillars. AAA: no material weaknesses. AA: qualitative premium may apply (e.g., sovereign credit quality).</td></tr>';
  h+='<tr><td><span class="rating-badge rating-a">A</span></td><td>Investment Grade</td><td>Strong profile with limited residual concerns across pillars.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-bbb">BBB</span></td><td>Investment Grade — Adequate</td><td>Adequate across pillars. Investment-grade threshold. Below-adequate individual pillar scores tolerated if weighted score supports.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-bb">BB</span></td><td>Below Investment Grade — Elevated Risk</td><td>Material weaknesses in at least one pillar. Speculative elements present.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-b">B / CCC</span></td><td>Below Investment Grade — High Risk</td><td>Multiple critical weaknesses. High uncertainty. Floor rules likely triggered.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-ur">UR</span></td><td>Under Review</td><td>Transparency impairment prevents standard assessment. A status designation, not a credit opinion.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-wd">WD</span></td><td>Wind-Down</td><td>Protocol in formal wind-down or acquisition. Residual obligation integrity is the primary assessment focus.</td></tr>';
  h+='<tr><td><span class="rating-badge rating-ig">IG</span></td><td>Investment Grade (Protocol Label)</td><td>Qualitative investment-grade designation corresponding to BBB− or above in letter-grade terms.</td></tr>';
  h+='</tbody></table></div></div>';
  h+='<div class="page-section"><div class="page-h2">Update and Review Process</div><div class="page-body">';
  h+='<p>Ratings are reviewed on a continuous basis as new information becomes available. Formal reviews are conducted when: (1) a covered protocol publishes material new disclosures; (2) a macro or geopolitical event materially affects sector-level risk; (3) a watchlist designation warrants resolution; or (4) the scheduled review date is reached.</p>';
  h+='<p>Protocols on the Watchlist are under active monitoring with disclosed monitoring factors. Rating changes are accompanied by a published rationale. Ratings are reaffirmed, revised, or placed under review based on current information — not automatically renewed.</p>';
  h+='</div></div>';
  h+='<div class="page-section"><div class="page-h2">Disclaimer</div><div class="page-body">';
  h+='<p>Foretoken Concourse ratings are independent analytical opinions derived exclusively from publicly available information. They do not constitute investment advice, a recommendation to buy or sell any financial instrument, or an endorsement of any protocol or issuer. Foretoken is not a registered investment adviser.</p>';
  h+='<p>Ratings reflect information available at the time of assessment. The tokenized asset market is nascent and rapidly evolving — ratings may not capture developments that occur between review cycles. Investors should conduct their own independent due diligence before making any investment decision.</p>';
  h+='</div></div>';
  return h+'</div>';
}

function renderAbout(){
  return '<div class="page-section">'
    +'<div class="page-title">About</div><div class="page-subtitle">FORETOKEN CONCOURSE</div>'
    +'<div class="page-section"><div class="page-h2">What We Do</div><div class="page-body">'
    +'<p>Foretoken Concourse is an independent analytical intelligence service covering tokenized private markets. We apply a structured five-pillar methodology to assess the risk profile of tokenized asset protocols across credit, transparency, liquidity, macro exposure, and operational dimensions.</p>'
    +'<p>Coverage spans six sectors: Tokenized Treasuries, Private Credit, Trade Finance, Real Estate, Tokenized Equities, and Precious Metals. All analysis is derived exclusively from publicly available information — published audits, smart contract documentation, on-chain data, regulatory filings, and protocol disclosures.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Editorial Independence</div><div class="page-body">'
    +'<p>Foretoken Concourse ratings and analysis are produced without commercial arrangement with any covered protocol. We do not accept payment for coverage, placement, or rating outcomes. Editorial independence is the foundation of our analytical credibility.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Foretoken</div><div class="page-body">'
    +'<p>Foretoken is an independent research and intelligence publisher focused on tokenized private markets. Concourse is Foretoken\'s flagship ratings and intelligence product.</p>'
    +'</div></div></div>';
}

function renderContact(){
  return '<div class="page-section">'
    +'<div class="page-title">Contact</div><div class="page-subtitle">FORETOKEN CONCOURSE</div>'
    +'<div class="page-section"><div class="page-h2">Get in Touch</div><div class="page-body">'
    +'<p>For subscription enquiries, editorial questions, or press contact:</p>'
    +'<p><a class="contact-link" href="mailto:hello@foretoken.co">hello@foretoken.co</a></p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Coverage Submissions</div><div class="page-body">'
    +'<p>Protocols seeking coverage consideration may submit publicly available documentation to the address above. Coverage decisions are made entirely at Foretoken\'s editorial discretion and are not contingent on any commercial arrangement.</p>'
    +'</div></div></div>';
}

function renderPrivacy(){
  return '<div class="page-section">'
    +'<div class="page-title">Privacy</div><div class="page-subtitle">FORETOKEN CONCOURSE — PRIVACY POLICY</div>'
    +'<div class="page-section"><div class="page-h2">Data We Collect</div><div class="page-body">'
    +'<p>Foretoken Concourse collects email addresses and payment information for subscription purposes. Subscriber data is used solely to fulfil subscription access and send Foretoken communications. We do not sell subscriber data to third parties.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Cookies and Analytics</div><div class="page-body">'
    +'<p>We may use standard analytics tools to understand aggregate site usage. No personally identifiable information is attached to analytics data. You may disable cookies in your browser settings.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Contact</div><div class="page-body">'
    +'<p>For privacy enquiries: <a class="contact-link" href="mailto:hello@foretoken.co">hello@foretoken.co</a></p>'
    +'</div></div></div>';
}

function renderTerms(){
  return '<div class="page-section">'
    +'<div class="page-title">Terms</div><div class="page-subtitle">FORETOKEN CONCOURSE — TERMS OF USE</div>'
    +'<div class="page-section"><div class="page-h2">Use of Content</div><div class="page-body">'
    +'<p>All content published by Foretoken Concourse — including ratings, analysis, intelligence reports, and methodology documentation — is protected by copyright and is the intellectual property of Foretoken. Subscriber access is granted for personal, non-commercial use. Redistribution, republication, or commercial use requires prior written permission.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">No Investment Advice</div><div class="page-body">'
    +'<p>Foretoken Concourse ratings and analysis are independent analytical opinions and do not constitute investment advice. Foretoken is not a registered investment adviser. Nothing published by Foretoken Concourse constitutes a recommendation to buy, sell, or hold any financial instrument or digital asset.</p>'
    +'</div></div>'
    +'<div class="page-section"><div class="page-h2">Limitation of Liability</div><div class="page-body">'
    +'<p>Ratings and analysis are derived from publicly available information believed to be reliable at the time of assessment. Foretoken makes no representations or warranties regarding accuracy, completeness, or timeliness. Foretoken accepts no liability for investment decisions made on the basis of Concourse content.</p>'
    +'</div></div></div>';
}

function renderSubscribe(){
  return '<div class="pricing-wrap">'
    +'<div class="page-title">Subscribe to Concourse</div>'
    +'<div class="page-subtitle">INDEPENDENT INTELLIGENCE ON TOKENIZED PRIVATE MARKETS</div>'
    +'<div class="pricing-grid">'
    +'<div class="pricing-card">'
    +'<div class="pricing-tier">Free</div>'
    +'<div class="pricing-price">$0</div>'
    +'<div class="pricing-cadence">Always free</div>'
    +'<div class="pricing-divider"></div>'
    +'<ul class="pricing-items">'
    +'<li>Foretoken newsletter and public dispatches</li>'
    +'<li>Selected public articles and previews</li>'
    +'<li>Limited sector rating summaries</li>'
    +'<li>Macro signal previews</li>'
    +'</ul>'
    +'<button class="pricing-cta" disabled>Current access</button>'
    +'</div>'
    +'<div class="pricing-card premium">'
    +'<div class="pricing-tier tier-premium">Concourse Subscriber</div>'
    +'<div class="pricing-price">Contact us</div>'
    +'<div class="pricing-cadence">Annual subscription</div>'
    +'<div class="pricing-divider"></div>'
    +'<ul class="pricing-items premium-items">'
    +'<li>Full sector ratings and analysis</li>'
    +'<li>Protocol ratings and scorecards</li>'
    +'<li>Five-pillar risk assessments</li>'
    +'<li>Intelligence dossier archive</li>'
    +'<li>Macro exposure analysis</li>'
    +'<li>Premium newsletter access</li>'
    +'<li>Ongoing ratings updates</li>'
    +'</ul>'
    +'<button class="pricing-cta cta-premium" onclick="window.location.href=\'mailto:hello@foretoken.co?subject=Concourse%20Subscription\'">Subscribe →</button>'
    +'</div></div>'
    +'<div style="margin-top:20px;font-family:var(--font-mono);font-size:10px;color:var(--dim);max-width:580px;line-height:1.6;">'
    +'Foretoken Concourse ratings are independent analytical opinions and do not constitute investment advice. Foretoken is not a registered investment adviser.'
    +'</div></div>';
}

// === PAGE ROUTING ===
var SECTION_SCROLL={sectors:'section-sectors',watchlist:'section-watchlist',protocols:'section-protocols',intelligence:'section-intel'};
var PAGE_FNS={methodology:renderMethodology,about:renderAbout,contact:renderContact,privacy:renderPrivacy,terms:renderTerms,subscribe:renderSubscribe};

function navigateTo(page){
  var mc=document.getElementById('mc');
  document.querySelectorAll('.page-view').forEach(function(pv){pv.classList.remove('active')});
  document.querySelectorAll('header nav a').forEach(function(a){a.classList.remove('active')});
  var navEl=document.getElementById('nav-'+page);
  if(navEl)navEl.classList.add('active');
  if(page==='overview'||SECTION_SCROLL[page]){
    mc.classList.remove('hidden');
    if(SECTION_SCROLL[page]){
      var el=document.getElementById(SECTION_SCROLL[page]);
      if(el)setTimeout(function(){el.scrollIntoView({behavior:'smooth'})},50);
      if(!navEl){var ov=document.getElementById('nav-overview');if(ov)ov.classList.add('active');}
    } else {
      window.scrollTo(0,0);
    }
  } else {
    mc.classList.add('hidden');
    var pageEl=document.getElementById('page-'+page);
    if(pageEl){
      if(!pageEl.innerHTML&&PAGE_FNS[page])pageEl.innerHTML=PAGE_FNS[page]();
      pageEl.classList.add('active');
      window.scrollTo(0,0);
    }
  }
  try{window.history.replaceState(null,null,page==='overview'?window.location.pathname:'#'+page);}catch(e){}
}

(function(){
  var h=window.location.hash.replace('#','')||'overview';
  if(h&&h!=='overview')navigateTo(h);
})();

window.addEventListener('hashchange',function(){
  navigateTo(window.location.hash.replace('#','')||'overview');
});
"""

content = content.replace(old_nav_handler, new_page_system, 1)

# ── Write output ──────────────────────────────────────────────────────────────
with open(dst, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done:', dst)
print('Size:', os.path.getsize(dst), 'bytes')

checks = [
    ('id="nav-overview"', 'nav IDs added'),
    ('page-view', 'page containers added'),
    ('navigateTo', 'routing function present'),
    ('renderMethodology', 'methodology page present'),
    ('renderSubscribe', 'subscribe page present'),
    ('footer-disclaimer', 'footer disclaimer present'),
    ('pricing-card', 'pricing cards present'),
    ('section-sectors', 'section IDs in renderAll'),
    ('Full sector ratings and analysis', 'correct premium items'),
    ('Foretoken newsletter and public dispatches', 'correct free items'),
    ('14+ active signals', 'BANNED text absent (should be False)'),
    ('early access to new sector', 'BANNED text absent (should be False)'),
    ('AAA/AA/A/BBB', 'rating scale NOT in footer (should be False)'),
    ('Rating Scale</div>', 'rating scale in methodology'),
]
for check, label in checks:
    found = check in content
    print(f"{'OK' if found else '  '}: {label} -> {found}")
