const skillCatalog = {
  "SQL": ["sql", "mysql", "postgresql", "database query"],
  "Python": ["python", "pandas", "numpy", "jupyter"],
  "Excel": ["excel", "pivot table", "vlookup", "spreadsheet"],
  "Power BI": ["power bi", "dax", "power query"],
  "Tableau": ["tableau"],
  "Data Visualization": ["visualization", "dashboard", "charts", "reporting"],
  "Statistics": ["statistics", "statistical", "regression", "hypothesis"],
  "Machine Learning": ["machine learning", "ml model", "scikit", "predictive"],
  "Generative AI": ["generative ai", "llm", "large language model", "prompt"],
  "JavaScript": ["javascript", "html", "css", "frontend", "web app"],
  "Cloud": ["aws", "azure", "oracle cloud", "oci", "cloud"],
  "Agile": ["agile", "scrum", "jira", "sprint"],
  "Communication": ["communication", "stakeholder", "presentation"],
  "Business Analysis": ["business analysis", "requirements", "process improvement"],
  "GitHub": ["github", "git", "version control"]
};

const certCatalog = {
  "PL-300 Power BI Data Analyst": ["power bi", "dax", "dashboard", "data visualization"],
  "Google Advanced Data Analytics": ["python", "statistics", "machine learning", "regression"],
  "AWS Cloud Practitioner": ["aws", "cloud", "cloud computing"],
  "Oracle Cloud Foundations": ["oracle cloud", "oci", "cloud"],
  "CompTIA Data+": ["data analysis", "statistics", "sql", "visualization"],
  "Azure AI Fundamentals": ["ai", "machine learning", "generative ai", "llm"]
};

const samplePostings = {
  all: [
    "Data Analyst Intern: SQL, Excel, Power BI, dashboard reporting, data visualization, communication with stakeholders.",
    "Business Analyst Intern: requirements gathering, process improvement, SQL, Excel, Power BI, Agile, presentation skills.",
    "AI Data Intern: Python, prompt engineering, LLM evaluation, data annotation, quality analysis, communication.",
    "Cloud Support Intern: AWS, cloud computing, SQL, troubleshooting, GitHub, documentation, customer communication.",
    "Junior BI Analyst: Power BI, DAX, SQL, Excel, data modeling, dashboard design, stakeholder reporting.",
    "Machine Learning Intern: Python, statistics, pandas, machine learning, model evaluation, data visualization."
  ],
  data: [
    "Data Analyst Intern: SQL, Excel, Power BI, dashboard reporting, data visualization, communication.",
    "Junior BI Analyst: Power BI, DAX, SQL, Excel, data modeling, dashboard design, stakeholder reporting.",
    "Analytics Intern: Python, SQL, Excel, statistics, Tableau, reporting, business insights."
  ],
  business: [
    "Business Analyst Intern: requirements gathering, process improvement, SQL, Excel, Power BI, Agile, presentation skills.",
    "Systems Analyst Intern: business analysis, documentation, stakeholder communication, database management, Agile."
  ],
  ai: [
    "AI Data Intern: Python, prompt engineering, LLM evaluation, data annotation, quality analysis, communication.",
    "Machine Learning Intern: Python, statistics, pandas, machine learning, model evaluation, data visualization."
  ],
  cloud: [
    "Cloud Support Intern: AWS, cloud computing, SQL, troubleshooting, GitHub, documentation, customer communication.",
    "IT Cloud Intern: Azure, Oracle Cloud, cloud fundamentals, version control, scripting, technical communication."
  ]
};

const starterResume = `Java Python SQL JavaScript HTML CSS
Data Analysis Generative AI Prompt Engineering AI Model Evaluation Large Language Models
Power BI Excel Google Sheets Oracle Cloud Infrastructure GitHub Agile Development Version Control
LearnWise AI recommendation engine dashboard localStorage
15 Weeks at UMBC Java Python game logic state management`;

const els = {
  targetRole: document.querySelector("#targetRole"),
  jobPostings: document.querySelector("#jobPostings"),
  resumeText: document.querySelector("#resumeText"),
  analyzeButton: document.querySelector("#analyzeButton"),
  sampleButton: document.querySelector("#sampleButton"),
  matchButton: document.querySelector("#matchButton"),
  copySummaryButton: document.querySelector("#copySummaryButton"),
  navTabs: [...document.querySelectorAll(".nav-tab")],
  views: [...document.querySelectorAll(".view")],
  viewTitle: document.querySelector("#viewTitle"),
  postingCount: document.querySelector("#postingCount"),
  topSkill: document.querySelector("#topSkill"),
  resumeScore: document.querySelector("#resumeScore"),
  nextFocus: document.querySelector("#nextFocus"),
  skillTotal: document.querySelector("#skillTotal"),
  skillBars: document.querySelector("#skillBars"),
  roadmap: document.querySelector("#roadmap"),
  marketSummary: document.querySelector("#marketSummary"),
  skillMatrix: document.querySelector("#skillMatrix"),
  certGrid: document.querySelector("#certGrid"),
  gapCount: document.querySelector("#gapCount"),
  gapList: document.querySelector("#gapList")
};

const state = {
  analysis: null,
  resume: starterResume
};

els.resumeText.value = starterResume;
loadSample();
analyzeMarket();

els.targetRole.addEventListener("change", () => {
  loadSample();
  analyzeMarket();
});
els.sampleButton.addEventListener("click", () => {
  loadSample();
  analyzeMarket();
});
els.analyzeButton.addEventListener("click", analyzeMarket);
els.matchButton.addEventListener("click", analyzeResume);
els.copySummaryButton.addEventListener("click", copySummary);
els.navTabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));

function loadSample() {
  const role = els.targetRole.value;
  els.jobPostings.value = samplePostings[role].join("\n\n");
}

function analyzeMarket() {
  const postings = splitPostings(els.jobPostings.value);
  const skillCounts = countMatches(postings.join("\n"), skillCatalog);
  const certScores = countMatches(postings.join("\n"), certCatalog);
  const sortedSkills = sortCounts(skillCounts);
  const sortedCerts = sortCounts(certScores);

  state.analysis = { postings, sortedSkills, sortedCerts };
  renderMarket();
  analyzeResume();
}

function analyzeResume() {
  if (!state.analysis) return;
  state.resume = els.resumeText.value;
  const resumeCounts = countMatches(state.resume, skillCatalog);
  const demanded = state.analysis.sortedSkills.filter(item => item.count > 0);
  const present = demanded.filter(item => resumeCounts[item.name] > 0);
  const missing = demanded.filter(item => resumeCounts[item.name] === 0);
  const score = demanded.length ? Math.round((present.length / demanded.length) * 100) : 0;

  els.resumeScore.textContent = `${score}%`;
  els.gapCount.textContent = `${missing.length} gaps`;
  els.nextFocus.textContent = missing[0]?.name || demanded[0]?.name || "-";
  renderGaps(present, missing);
  renderRoadmap(missing, state.analysis.sortedCerts);
}

function renderMarket() {
  const { postings, sortedSkills, sortedCerts } = state.analysis;
  const top = sortedSkills[0];

  els.postingCount.textContent = postings.length;
  els.topSkill.textContent = top?.name || "-";
  els.skillTotal.textContent = `${sortedSkills.filter(item => item.count > 0).length} detected`;
  renderBars(sortedSkills.slice(0, 9));
  renderMatrix(sortedSkills);
  renderCerts(sortedCerts);
  els.marketSummary.textContent = buildSummary(postings, sortedSkills, sortedCerts);
}

function renderBars(items) {
  const max = Math.max(1, ...items.map(item => item.count));
  els.skillBars.innerHTML = items.map(item => `
    <div class="bar-item">
      <div class="bar-label"><span>${item.name}</span><span>${item.count}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width: ${(item.count / max) * 100}%"></div></div>
    </div>
  `).join("");
}

function renderRoadmap(missing, certs) {
  const focus = missing.slice(0, 4).map(item => item.name);
  const cert = certs.find(item => item.count > 0)?.name || "PL-300 Power BI Data Analyst";
  const steps = [
    `Build or update one project that demonstrates ${focus[0] || "your top demanded skill"}.`,
    `Add evidence for ${focus[1] || "SQL"} in your resume bullets and GitHub README files.`,
    `Start the ${cert} certification if it matches the roles you are targeting.`,
    "Use the strongest missing skill as your next LinkedIn learning post or portfolio upgrade."
  ];

  els.roadmap.innerHTML = steps.map(step => `<li>${step}</li>`).join("");
}

function renderMatrix(skills) {
  const groups = {
    "Analytics": ["SQL", "Python", "Excel", "Statistics", "Data Visualization", "Power BI", "Tableau"],
    "AI": ["Generative AI", "Machine Learning"],
    "Business / IS": ["Business Analysis", "Communication", "Agile"],
    "Technical Tools": ["JavaScript", "Cloud", "GitHub"]
  };

  els.skillMatrix.innerHTML = Object.entries(groups).map(([group, names]) => {
    const tags = names.map(name => {
      const count = skills.find(item => item.name === name)?.count || 0;
      return `<span class="tag">${name}: ${count}</span>`;
    }).join("");
    return `<div class="matrix-card"><h4>${group}</h4><div class="tag-list">${tags}</div></div>`;
  }).join("");
}

function renderCerts(certs) {
  els.certGrid.innerHTML = certs.map(cert => `
    <div class="cert-card">
      <h4>${cert.name}</h4>
      <p class="summary">${cert.count > 0 ? `${cert.count} matching market signals found.` : "No direct signals in this posting set."}</p>
    </div>
  `).join("");
}

function renderGaps(present, missing) {
  const cards = [
    ...missing.map(item => ({ ...item, status: "missing" })),
    ...present.map(item => ({ ...item, status: "present" }))
  ];

  els.gapList.innerHTML = cards.map(item => `
    <div class="gap-card ${item.status}">
      <h4>${item.name}</h4>
      <p class="summary">${item.status === "missing" ? "Missing from resume but requested in postings." : "Already visible in your resume."}</p>
    </div>
  `).join("");
}

function buildSummary(postings, skills, certs) {
  const topSkills = skills.slice(0, 5).map(item => item.name).join(", ");
  const topCert = certs.find(item => item.count > 0)?.name || "no dominant certification";
  return `CareerLens analyzed ${postings.length} postings and found strongest demand for ${topSkills}. The most relevant certification signal is ${topCert}. Students targeting these roles should prioritize portfolio proof, resume keyword alignment, and one focused certification instead of collecting unrelated credentials.`;
}

function countMatches(text, catalog) {
  const normalized = text.toLowerCase();
  return Object.fromEntries(Object.entries(catalog).map(([name, terms]) => {
    const count = terms.reduce((sum, term) => {
      const matches = normalized.match(new RegExp(escapeRegExp(term), "g"));
      return sum + (matches ? matches.length : 0);
    }, 0);
    return [name, count];
  }));
}

function sortCounts(counts) {
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function splitPostings(text) {
  return text.split(/\n\s*\n/g).map(item => item.trim()).filter(Boolean);
}

function switchView(view) {
  const titles = {
    overview: "Market Overview",
    skills: "Skills Intelligence",
    certs: "Certification Demand",
    resume: "Resume Match"
  };

  els.viewTitle.textContent = titles[view];
  els.navTabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  els.views.forEach(section => section.classList.toggle("active", section.id === `${view}View`));
}

async function copySummary() {
  const text = `${els.marketSummary.textContent}\nResume match: ${els.resumeScore.textContent}\nNext focus: ${els.nextFocus.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    els.copySummaryButton.textContent = "Copied";
    setTimeout(() => {
      els.copySummaryButton.textContent = "Copy Summary";
    }, 1200);
  } catch {
    els.copySummaryButton.textContent = "Copy Failed";
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
