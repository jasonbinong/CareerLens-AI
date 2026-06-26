const roleProfiles = {
  all: {
    label: "All student tech roles",
    focus: "Explore the broad market, then narrow to one role before applying.",
    project: "Create a portfolio homepage that links your strongest analytics, AI, and web projects.",
    cert: "PL-300 Power BI Data Analyst"
  },
  data_analyst: {
    label: "Data Analyst Intern",
    focus: "Turn messy data into reports, dashboards, and business recommendations.",
    project: "Build a student success dashboard using SQL or CSV data, Excel, and Power BI.",
    cert: "PL-300 Power BI Data Analyst"
  },
  bi_analyst: {
    label: "Business Intelligence Analyst",
    focus: "Model data and build dashboards that leaders can use repeatedly.",
    project: "Build a KPI dashboard with Power BI, DAX measures, slicers, and a short insight memo.",
    cert: "PL-300 Power BI Data Analyst"
  },
  analytics_engineer: {
    label: "Analytics Engineer",
    focus: "Prepare reliable datasets and metrics for analysts and dashboards.",
    project: "Create a mini data warehouse with cleaned tables, SQL transformations, and documentation.",
    cert: "CompTIA Data+"
  },
  database_analyst: {
    label: "Database Analyst",
    focus: "Organize, query, validate, and document relational data.",
    project: "Design a student resource database with ERD, SQL tables, queries, and sample reports.",
    cert: "Oracle Cloud Foundations"
  },
  ai_data_trainer: {
    label: "AI Data Trainer",
    focus: "Evaluate model outputs, label data, and improve response quality.",
    project: "Create an AI response evaluation rubric and score sample answers for accuracy and safety.",
    cert: "Azure AI Fundamentals"
  },
  ml_intern: {
    label: "Machine Learning Intern",
    focus: "Use Python, statistics, and model evaluation to make predictions.",
    project: "Build a small prediction notebook with pandas, scikit-learn, evaluation metrics, and visuals.",
    cert: "Google Advanced Data Analytics"
  },
  ai_product_analyst: {
    label: "AI Product Analyst",
    focus: "Measure how AI features perform for users and the business.",
    project: "Analyze AI feature feedback and build a dashboard for quality, adoption, and failure patterns.",
    cert: "Azure AI Fundamentals"
  },
  automation_analyst: {
    label: "Automation Analyst",
    focus: "Find repetitive workflows and automate them with scripts or low-code tools.",
    project: "Build an automation tracker that calculates time saved and flags high-value workflows.",
    cert: "Microsoft Power Platform Fundamentals"
  },
  business_analyst: {
    label: "Business Analyst",
    focus: "Translate stakeholder needs into requirements, processes, and system improvements.",
    project: "Document a campus workflow with user stories, process map, requirements, and dashboard metrics.",
    cert: "ECBA Business Analysis"
  },
  systems_analyst: {
    label: "Systems Analyst",
    focus: "Connect business needs, databases, software workflows, and technical documentation.",
    project: "Create a system requirements package for a student advising or tutoring platform.",
    cert: "CompTIA Project+"
  },
  product_analyst: {
    label: "Product Analyst",
    focus: "Use behavior data and experiments to improve a digital product.",
    project: "Build a product metrics dashboard with funnel, retention, and feature usage analysis.",
    cert: "Google Data Analytics"
  },
  project_coordinator: {
    label: "IT Project Coordinator",
    focus: "Coordinate tasks, risks, timelines, and communication across a technical project.",
    project: "Create a project plan, risk register, sprint board, and stakeholder update for one app project.",
    cert: "CompTIA Project+"
  },
  software_engineer: {
    label: "Software Engineering Intern",
    focus: "Build, test, debug, and document working software.",
    project: "Build a full-stack or front-end app with clear state management, tests, and GitHub issues.",
    cert: "freeCodeCamp JavaScript Algorithms"
  },
  frontend_developer: {
    label: "Front-End Developer",
    focus: "Create accessible, responsive user interfaces with strong JavaScript behavior.",
    project: "Upgrade one portfolio app with accessibility checks, responsive states, and polished interactions.",
    cert: "Meta Front-End Developer"
  },
  qa_analyst: {
    label: "QA Analyst",
    focus: "Find defects, write test cases, and protect product quality.",
    project: "Create a QA test plan and bug report suite for one of your own web apps.",
    cert: "ISTQB Foundation"
  },
  ux_researcher: {
    label: "UX Researcher",
    focus: "Understand user needs through interviews, usability tests, and evidence-based recommendations.",
    project: "Run a usability study on LearnWise AI and summarize findings, issues, and redesign priorities.",
    cert: "Google UX Design"
  },
  cloud_intern: {
    label: "Cloud / IT Intern",
    focus: "Support cloud services, troubleshoot issues, and document technical environments.",
    project: "Deploy a static app, document the architecture, and compare AWS, Azure, and OCI options.",
    cert: "AWS Cloud Practitioner"
  },
  cybersecurity_analyst: {
    label: "Cybersecurity Analyst",
    focus: "Monitor systems, investigate alerts, and reduce security risk.",
    project: "Build a security incident dashboard using sample logs and classify alert severity.",
    cert: "CompTIA Security+"
  },
  it_support: {
    label: "IT Support Analyst",
    focus: "Troubleshoot user issues, document fixes, and support hardware, software, and accounts.",
    project: "Create a ticket analysis dashboard showing issue types, resolution time, and escalation trends.",
    cert: "CompTIA A+"
  }
};

const skillCatalog = {
  "SQL": ["sql", "mysql", "postgresql", "database query", "joins", "relational"],
  "Python": ["python", "pandas", "numpy", "jupyter"],
  "Excel": ["excel", "pivot table", "vlookup", "spreadsheet"],
  "Power BI": ["power bi", "dax", "power query"],
  "Tableau": ["tableau"],
  "Data Visualization": ["visualization", "dashboard", "charts", "reporting", "kpi"],
  "Statistics": ["statistics", "statistical", "regression", "hypothesis", "a/b test"],
  "Machine Learning": ["machine learning", "ml model", "scikit", "predictive", "model evaluation"],
  "Generative AI": ["generative ai", "llm", "large language model", "prompt", "ai evaluation"],
  "Data Quality": ["data quality", "validation", "cleaning", "data integrity"],
  "JavaScript": ["javascript", "html", "css", "frontend", "web app"],
  "APIs": ["api", "rest", "json", "integration"],
  "Cloud": ["aws", "azure", "oracle cloud", "oci", "cloud"],
  "Cybersecurity": ["security", "cybersecurity", "siem", "incident", "vulnerability", "risk"],
  "Networking": ["network", "tcp/ip", "dns", "vpn", "active directory"],
  "Troubleshooting": ["troubleshooting", "help desk", "technical support", "ticket"],
  "Testing": ["qa", "test cases", "bug report", "quality assurance", "manual testing"],
  "UX Research": ["ux", "user research", "usability", "interview", "persona"],
  "Product Metrics": ["product metrics", "funnel", "retention", "adoption", "experimentation"],
  "Agile": ["agile", "scrum", "jira", "sprint", "kanban"],
  "Communication": ["communication", "stakeholder", "presentation", "documentation"],
  "Business Analysis": ["business analysis", "requirements", "process improvement", "user stories"],
  "Project Management": ["project plan", "risk register", "timeline", "project coordination"],
  "GitHub": ["github", "git", "version control"]
};

const certCatalog = {
  "PL-300 Power BI Data Analyst": ["power bi", "dax", "dashboard", "data visualization", "bi analyst"],
  "Google Advanced Data Analytics": ["python", "statistics", "machine learning", "regression", "pandas"],
  "Google Data Analytics": ["data analysis", "excel", "sql", "tableau", "dashboard"],
  "AWS Cloud Practitioner": ["aws", "cloud", "cloud computing"],
  "Oracle Cloud Foundations": ["oracle cloud", "oci", "cloud"],
  "CompTIA Data+": ["data analysis", "statistics", "sql", "visualization", "data quality"],
  "Azure AI Fundamentals": ["ai", "machine learning", "generative ai", "llm"],
  "Microsoft Power Platform Fundamentals": ["power automate", "automation", "power apps", "workflow"],
  "ECBA Business Analysis": ["business analysis", "requirements", "process improvement", "stakeholder"],
  "CompTIA Project+": ["project coordination", "project plan", "risk", "timeline"],
  "CompTIA A+": ["help desk", "technical support", "hardware", "troubleshooting"],
  "CompTIA Security+": ["security", "cybersecurity", "incident", "risk", "vulnerability"],
  "ISTQB Foundation": ["qa", "test cases", "quality assurance", "bug report"],
  "Google UX Design": ["ux", "user research", "usability", "persona"],
  "Meta Front-End Developer": ["frontend", "javascript", "html", "css", "react"]
};

const samplePostings = {
  all: [
    "Data Analyst Intern: SQL, Excel, Power BI, dashboard reporting, data visualization, communication with stakeholders.",
    "Business Analyst Intern: requirements gathering, process improvement, SQL, Excel, Power BI, Agile, presentation skills.",
    "AI Data Trainer: prompt evaluation, LLM response ranking, data quality, annotation, communication, AI safety.",
    "Cloud Support Intern: AWS, cloud computing, networking, troubleshooting, GitHub, documentation, customer communication.",
    "Cybersecurity Analyst Intern: SIEM alerts, incident response, vulnerability management, risk reporting, documentation.",
    "Software Engineering Intern: JavaScript, APIs, GitHub, Agile, testing, debugging, responsive web apps."
  ],
  data_analyst: [
    "Data Analyst Intern: SQL, Excel, Power BI, dashboard reporting, data visualization, stakeholder communication.",
    "Analytics Intern: Python, SQL, Excel, statistics, Tableau, reporting, business insights, data cleaning.",
    "Student Data Analyst: data quality, spreadsheet analysis, KPI dashboards, Power Query, presentation skills.",
    "Operations Analytics Intern: SQL joins, Excel pivot tables, dashboard automation, process improvement, communication."
  ],
  bi_analyst: [
    "Junior BI Analyst: Power BI, DAX, SQL, Excel, data modeling, dashboard design, stakeholder reporting.",
    "Business Intelligence Intern: KPI dashboards, Power Query, data visualization, requirements gathering, presentation.",
    "BI Reporting Intern: SQL, Power BI, data quality, recurring reports, executive dashboards, documentation.",
    "Dashboard Analyst: DAX measures, Power BI slicers, data modeling, business analysis, communication."
  ],
  analytics_engineer: [
    "Analytics Engineering Intern: SQL transformations, data modeling, data quality, documentation, GitHub.",
    "Data Pipeline Intern: Python, SQL, APIs, validation checks, dashboards, version control.",
    "Metrics Analyst Intern: clean datasets, KPI definitions, relational databases, SQL joins, stakeholder documentation."
  ],
  database_analyst: [
    "Database Analyst Intern: SQL, relational databases, data integrity, documentation, reporting, access controls.",
    "Data Management Intern: database queries, Excel, validation, data quality, process improvement.",
    "Junior Database Support: SQL, troubleshooting, documentation, backups, user support, communication."
  ],
  ai_data_trainer: [
    "AI Data Trainer: evaluate LLM responses, rank outputs, prompt engineering, data annotation, quality analysis.",
    "AI Response Evaluator: generative AI, rubric scoring, safety review, communication, documentation.",
    "Model Quality Intern: AI evaluation, data quality, prompt testing, issue tracking, analytical writing.",
    "Multimodal AI Reviewer: text and image evaluation, annotation guidelines, quality assurance, feedback."
  ],
  ml_intern: [
    "Machine Learning Intern: Python, pandas, statistics, machine learning, model evaluation, data visualization.",
    "Predictive Analytics Intern: regression, scikit-learn, Jupyter, SQL, data cleaning, dashboard reporting.",
    "ML Research Assistant: Python, experiments, model metrics, documentation, statistics, GitHub."
  ],
  ai_product_analyst: [
    "AI Product Analyst Intern: product metrics, AI feature adoption, dashboard reporting, LLM evaluation, SQL.",
    "Product Insights Intern: user feedback, funnel analysis, retention, experimentation, data visualization.",
    "AI Quality Analyst: generative AI, error analysis, product metrics, stakeholder communication, dashboards."
  ],
  automation_analyst: [
    "Automation Analyst Intern: workflow automation, Power Automate, Excel, process improvement, documentation.",
    "Operations Automation Intern: JavaScript, APIs, low-code tools, reporting, time-savings analysis.",
    "Business Process Automation: requirements, user stories, workflow mapping, Power Apps, stakeholder communication."
  ],
  business_analyst: [
    "Business Analyst Intern: requirements gathering, process improvement, SQL, Excel, Power BI, Agile, presentation.",
    "IT Business Analyst: user stories, stakeholder interviews, documentation, dashboards, system requirements.",
    "Operations Analyst Intern: process mapping, Excel, communication, business analysis, reporting, Agile."
  ],
  systems_analyst: [
    "Systems Analyst Intern: business analysis, documentation, stakeholder communication, database management, Agile.",
    "Information Systems Intern: requirements, process improvement, SQL, user support, system testing.",
    "Junior Systems Analyst: workflow analysis, technical documentation, APIs, data quality, troubleshooting."
  ],
  product_analyst: [
    "Product Analyst Intern: SQL, product metrics, funnel analysis, dashboard reporting, A/B testing.",
    "Digital Product Intern: user behavior analysis, retention, adoption metrics, Tableau, stakeholder communication.",
    "Growth Analyst Intern: experimentation, KPI dashboards, Python, statistics, presentation."
  ],
  project_coordinator: [
    "IT Project Coordinator Intern: project plan, timeline tracking, risk register, Agile, stakeholder communication.",
    "Technical Project Intern: Jira, sprint planning, documentation, status reports, requirements, presentation.",
    "Project Management Intern: issue tracking, meeting notes, risk reporting, Excel, communication."
  ],
  software_engineer: [
    "Software Engineering Intern: JavaScript, APIs, GitHub, Agile, testing, debugging, responsive web apps.",
    "Web Application Intern: HTML, CSS, JavaScript, REST APIs, version control, quality assurance.",
    "Junior Developer Intern: Python, SQL, GitHub, unit testing, documentation, problem solving."
  ],
  frontend_developer: [
    "Front-End Developer Intern: HTML, CSS, JavaScript, responsive design, accessibility, GitHub.",
    "UI Developer Intern: JavaScript, APIs, CSS layout, usability, testing, documentation.",
    "Web Design Intern: frontend development, UX, user research, accessibility, content updates."
  ],
  qa_analyst: [
    "QA Analyst Intern: test cases, manual testing, bug reports, regression testing, Jira, communication.",
    "Software Quality Intern: quality assurance, documentation, user acceptance testing, Agile, GitHub.",
    "Product Testing Intern: test plans, defect tracking, troubleshooting, stakeholder communication."
  ],
  ux_researcher: [
    "UX Research Intern: user interviews, usability testing, personas, survey analysis, presentation.",
    "User Experience Intern: research planning, prototype testing, qualitative analysis, documentation.",
    "Product Research Intern: user feedback, usability issues, product metrics, stakeholder recommendations."
  ],
  cloud_intern: [
    "Cloud Support Intern: AWS, cloud computing, networking, troubleshooting, GitHub, documentation.",
    "IT Cloud Intern: Azure, Oracle Cloud, cloud fundamentals, scripting, technical communication.",
    "Cloud Operations Intern: monitoring, incident response, troubleshooting, access management, documentation."
  ],
  cybersecurity_analyst: [
    "Cybersecurity Analyst Intern: SIEM alerts, incident response, vulnerability management, risk reporting.",
    "Security Operations Intern: log analysis, phishing investigation, security documentation, networking.",
    "Information Security Intern: access reviews, risk assessment, troubleshooting, communication, compliance."
  ],
  it_support: [
    "IT Support Analyst Intern: help desk tickets, troubleshooting, hardware, software, Active Directory.",
    "Technical Support Intern: customer communication, documentation, networking, account support, escalation.",
    "Desktop Support Intern: Windows, troubleshooting, ticket analysis, software installs, user training."
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
  const weightedPossible = demanded.reduce((sum, item) => sum + item.count, 0);
  const weightedPresent = present.reduce((sum, item) => sum + item.count, 0);
  const score = weightedPossible ? Math.round((weightedPresent / weightedPossible) * 100) : 0;

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
  renderBars(sortedSkills.slice(0, 12));
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
  const role = roleProfiles[els.targetRole.value];
  const focus = missing.slice(0, 4).map(item => item.name);
  const cert = certs.find(item => item.count > 0)?.name || role.cert;
  const steps = [
    `Build portfolio proof: ${role.project}`,
    `Add resume evidence for ${focus[0] || "your strongest demanded skill"} using a project bullet with tool, action, and result.`,
    `If you want a certification next, prioritize ${cert} because it aligns with ${role.label}.`,
    `Practice explaining ${focus[1] || role.focus} in a 30-second interview answer.`
  ];

  els.roadmap.innerHTML = steps.map(step => `<li>${step}</li>`).join("");
}

function renderMatrix(skills) {
  const groups = {
    "Analytics": ["SQL", "Python", "Excel", "Statistics", "Data Quality", "Data Visualization", "Power BI", "Tableau"],
    "AI and product": ["Generative AI", "Machine Learning", "Product Metrics", "UX Research"],
    "Business / IS": ["Business Analysis", "Project Management", "Communication", "Agile"],
    "Technical systems": ["JavaScript", "APIs", "Cloud", "Cybersecurity", "Networking", "Troubleshooting", "Testing", "GitHub"]
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
  const role = roleProfiles[els.targetRole.value];
  els.certGrid.innerHTML = certs.map(cert => `
    <div class="cert-card">
      <h4>${cert.name}</h4>
      <p class="summary">${cert.count > 0 ? `${cert.count} matching market signals found.` : cert.name === role.cert ? "Recommended for this role even if the sample postings do not name it directly." : "No direct signals in this posting set."}</p>
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
      <p class="summary">${item.status === "missing" ? "Missing from resume but requested in this role's postings." : "Already visible in your resume."}</p>
    </div>
  `).join("");
}

function buildSummary(postings, skills, certs) {
  const role = roleProfiles[els.targetRole.value];
  const topSkills = skills.slice(0, 6).map(item => item.name).join(", ");
  const topCert = certs.find(item => item.count > 0)?.name || role.cert;
  return `${role.label}: ${role.focus} CareerLens analyzed ${postings.length} role-focused postings and found strongest demand for ${topSkills}. The most relevant certification path is ${topCert}. Recommended portfolio proof: ${role.project}`;
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
