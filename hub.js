
const CASES = [
  {
    "id": "higher-ed-ips",
    "title": "Higher Education IPS",
    "subtitle": "The Telescope on Your Own Institution",
    "short": "Higher Education IPS",
    "status": "Ready for migration",
    "primaryRole": "Education, economics, institutional self-study, public mission, extraction architecture, and student-facing institutional literacy.",
    "chapters": [
      "Chapter 5",
      "Chapter 11",
      "Capstone"
    ],
    "question": "Where does a public college sit in a wider structural spectrum, and what does the IPS model reveal about mission, debt, access, and institutional architecture?",
    "route": "Chapter 11 primary; Chapter 5 and capstone extensions.",
    "caseUrl": "cases/higher-education-ips.html",
    "tags": [
      "IPS",
      "education",
      "public mission",
      "student debt",
      "institutional design"
    ],
    "primaryData": "College Scorecard, IPEDS, institutional public data, and documented model formulas.",
    "migrationNote": "Phase D candidate: migrate first because it connects directly to SPC and student institutional literacy."
  },
  {
    "id": "florida-nursing-homes",
    "title": "Florida Nursing Homes and the Visible Parasite",
    "subtitle": "Public Care, Structural Risk, and National Benchmark Evidence",
    "short": "Florida Nursing Homes",
    "status": "Shell sample active",
    "primaryRole": "Public care, elder-care vulnerability, staffing pressure, inspection evidence, hidden burden, national benchmarking, and repair design.",
    "chapters": [
      "Chapter 12",
      "Chapter 13",
      "Chapter 14/15",
      "Chapter 5 extension"
    ],
    "question": "How can a care institution formally organized around resident protection become structurally capable of shifting risk, cost, and vulnerability onto residents, workers, families, and public systems?",
    "route": "Chapter 12 or 13 primary; capstone synthesis; Chapter 5 rights/capabilities extension.",
    "caseUrl": "cases/florida-nursing-homes-visible-parasite.html",
    "tags": [
      "nursing homes",
      "public care",
      "visible parasite",
      "FHRI",
      "benchmarks"
    ],
    "primaryData": "Florida nursing-home evidence, Florida AHCA where appropriate, CMS national nursing-home datasets, and national benchmark context.",
    "migrationNote": "Phase B sample title and shell; future migration should replace placeholder values with documented empirical inputs."
  },
  {
    "id": "financial-crisis-2008",
    "title": "The 2008 Financial Crisis",
    "subtitle": "Evidence Policy and Systemic Moral Failure",
    "short": "2008 Financial Crisis",
    "status": "Ready for migration",
    "primaryRole": "Governance, financial systems, regulatory capture, systemic risk, triadic overwrite, P-SAGE diagnosis, and T1/T2 repair.",
    "chapters": [
      "Chapter 3",
      "Chapter 8",
      "Chapter 12",
      "Capstone"
    ],
    "question": "How can a financial system preserve operational continuity while replacing the ethical function of its warning and signal channels?",
    "route": "Chapter 12 primary; Chapter 3 evidence policy extension; capstone systems comparison.",
    "caseUrl": "cases/2008-financial-crisis.html",
    "tags": [
      "financial crisis",
      "P-SAGE",
      "systemic risk",
      "evidence policy",
      "T1/T2"
    ],
    "primaryData": "Public crisis documentation, regulatory history, financial-system timelines, and structured model inputs.",
    "migrationNote": "Phase E candidate: use to perfect timeline, causal-map, and evidence-policy views."
  },
  {
    "id": "geo-florida",
    "title": "GEO Group Florida",
    "subtitle": "From Parasite to Commonwealth",
    "short": "GEO Florida",
    "status": "Ready for migration",
    "primaryRole": "Justice, prison privatization, captive populations, public accountability, structural repair, Maathai pathway, and commonwealth design.",
    "chapters": [
      "Chapter 5",
      "Chapter 7",
      "Chapter 10",
      "Chapter 13/14",
      "Capstone"
    ],
    "question": "What would it take to move a captive-population institution from extraction architecture toward moral-commons repair?",
    "route": "Chapter 5 extension through rights/capabilities and functional equivalence; justice and capstone routes later.",
    "caseUrl": "cases/geo-florida-prison.html",
    "tags": [
      "justice",
      "prisons",
      "privatization",
      "moral commons",
      "repair"
    ],
    "primaryData": "SEC filings, Florida DOC materials, OSHA or public safety data where relevant, public-interest research, and carefully labeled interpretive model claims.",
    "migrationNote": "Phase F candidate: develop justice-sensitive language and repair-design simulator."
  }
];
const ROUTES = [
  {
    "chapter": "Chapter 3",
    "title": "Ethical Lenses and Evidence Policy",
    "primary": [
      "The 2008 Financial Crisis"
    ],
    "extensions": [
      "Florida Nursing Homes and the Visible Parasite"
    ],
    "prompt": "What does a system's evidence policy make visible, and what does it hide?"
  },
  {
    "chapter": "Chapter 4",
    "title": "Emergence, Complexity, and Responsibility",
    "primary": [
      "The 2008 Financial Crisis",
      "Higher Education IPS"
    ],
    "extensions": [
      "Florida Nursing Homes and the Visible Parasite"
    ],
    "prompt": "When macro-patterns emerge from local rules or incentives, how does responsibility shift toward system design?"
  },
  {
    "chapter": "Chapter 5",
    "title": "Social Contract, Justice, and the Moral Commons",
    "primary": [
      "GEO Group Florida"
    ],
    "extensions": [
      "Higher Education IPS",
      "Florida Nursing Homes and the Visible Parasite"
    ],
    "prompt": "Where do formal rights fail to become actual capabilities, and what shared task can different PRFs support for different authentic reasons?"
  },
  {
    "chapter": "Chapter 11",
    "title": "Education, Economics, and Institutional Design",
    "primary": [
      "Higher Education IPS"
    ],
    "extensions": [
      "The 2008 Financial Crisis"
    ],
    "prompt": "How can students use public data to understand institutional mission, access, debt, and structural incentives?"
  },
  {
    "chapter": "Chapter 12",
    "title": "Systems, Care, Governance, and Institutional Risk",
    "primary": [
      "The 2008 Financial Crisis",
      "Florida Nursing Homes and the Visible Parasite"
    ],
    "extensions": [
      "Higher Education IPS"
    ],
    "prompt": "How do risk, responsibility, and repair travel through complex institutional systems?"
  },
  {
    "chapter": "Capstone",
    "title": "Comparative Structural Ethics",
    "primary": [
      "Florida Nursing Homes and the Visible Parasite"
    ],
    "extensions": [
      "Higher Education IPS",
      "The 2008 Financial Crisis",
      "GEO Group Florida"
    ],
    "prompt": "What patterns recur across domains, and which claims are direct data, model outputs, interpretations, or hypotheses?"
  }
];
const METHODS = [
  {
    "title": "Evidence Standards",
    "text": "Every case separates direct public data, computed model output, interpretive diagnosis, teaching prompt, and research hypothesis.",
    "url": "methods/evidence-standards.html"
  },
  {
    "title": "IPS Methodology",
    "text": "Institutional parameter structure for examining how systems convert values, constraints, incentives, and repair capacity into outcomes.",
    "url": "methods/ips-methodology.html"
  },
  {
    "title": "P-SAGE Methodology",
    "text": "A structured way to audit perception, suppression, agency, governance, and ethics across institutional cases.",
    "url": "methods/psage-methodology.html"
  },
  {
    "title": "FHRI / Structural Ceiling",
    "text": "A placeholder methods page for modeling resilience, health, repair capacity, and institutional constraints without overclaiming.",
    "url": "methods/fhri-methodology.html"
  }
];

function esc(x) {
  return String(x ?? "").replace(/[&<>\"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[m]));
}

function caseCard(c) {
  return `<article class="case-card" data-search="${esc((c.title+' '+c.subtitle+' '+c.tags.join(' ')+' '+c.primaryRole+' '+c.chapters.join(' ')).toLowerCase())}">
    <span class="case-status">${esc(c.status)}</span>
    <h3>${esc(c.title)}</h3>
    <p class="footer-note">${esc(c.subtitle)}</p>
    <div class="pill-row">${c.chapters.map(ch => `<span class="pill">${esc(ch)}</span>`).join("")}</div>
    <p class="case-question">${esc(c.question)}</p>
    <p>${esc(c.primaryRole)}</p>
    <div class="pill-row">${c.tags.slice(0,4).map(t => `<span class="pill gold">${esc(t)}</span>`).join("")}</div>
    <div class="spacer"></div>
    <div class="actions">
      <a class="button primary" href="${esc(c.caseUrl)}">Open case module</a>
      <button class="button" data-case="${esc(c.id)}">Quick view</button>
    </div>
  </article>`;
}

function renderCases(list = CASES) {
  const el = document.getElementById("caseGrid");
  if(!el) return;
  el.innerHTML = list.map(caseCard).join("");
  document.querySelectorAll("[data-case]").forEach(btn => btn.addEventListener("click", () => showCaseQuickView(btn.dataset.case)));
}

function routeCard(r) {
  return `<article class="route-card">
    <strong>${esc(r.chapter)} — ${esc(r.title)}</strong>
    <p><b>Primary:</b> ${esc(r.primary.join(", "))}</p>
    <p><b>Extensions:</b> ${esc(r.extensions.join(", "))}</p>
    <p class="footer-note">${esc(r.prompt)}</p>
  </article>`;
}

function renderRoutes() {
  const el = document.getElementById("routeGrid");
  if(el) el.innerHTML = ROUTES.map(routeCard).join("");
}

function renderMethods() {
  const el = document.getElementById("methodGrid");
  if(el) el.innerHTML = METHODS.map(m => `<article class="method-card"><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p><a class="button" href="${esc(m.url)}">Open method page</a></article>`).join("");
}

function showCaseQuickView(id) {
  const c = CASES.find(x => x.id === id);
  if(!c) return;
  const el = document.getElementById("quickView");
  el.innerHTML = `<div class="card s12">
    <h2>${esc(c.title)}</h2>
    <h3>${esc(c.subtitle)}</h3>
    <div class="pill-row">${c.chapters.map(ch => `<span class="pill">${esc(ch)}</span>`).join("")}</div>
    <p><strong>Core question:</strong> ${esc(c.question)}</p>
    <p><strong>Primary data / evidence layer:</strong> ${esc(c.primaryData)}</p>
    <p><strong>Migration note:</strong> ${esc(c.migrationNote)}</p>
    <p><strong>Teaching route:</strong> ${esc(c.route)}</p>
    <div class="actions"><a class="button primary" href="${esc(c.caseUrl)}">Open case module</a><button class="button" onclick="document.getElementById('quickView').innerHTML=''">Close quick view</button></div>
  </div>`;
  el.scrollIntoView({behavior:"smooth", block:"start"});
}

function filterCases() {
  const q = document.getElementById("caseSearch").value.trim().toLowerCase();
  document.querySelectorAll(".case-card").forEach(card => {
    card.style.display = card.dataset.search.includes(q) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCases();
  renderRoutes();
  renderMethods();
  const search = document.getElementById("caseSearch");
  if(search) search.addEventListener("input", filterCases);
});
