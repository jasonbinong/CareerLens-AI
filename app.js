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
    project: "Run a usability study on LearnWise and summarize findings, issues, and redesign priorities.",
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

const laborMarketDataset = [
  {
    role: "Data Analyst Intern",
    key: "data_analyst",
    demand: 86,
    salaryRange: "$22-$34/hr",
    topSkills: ["SQL", "Excel", "Power BI", "Data Visualization"],
    portfolioProof: "Dashboard + cleaned dataset + insight memo"
  },
  {
    role: "Business Intelligence Analyst",
    key: "bi_analyst",
    demand: 82,
    salaryRange: "$24-$36/hr",
    topSkills: ["Power BI", "SQL", "DAX", "Data Modeling"],
    portfolioProof: "KPI dashboard with slicers and DAX measures"
  },
  {
    role: "AI Data Trainer",
    key: "ai_data_trainer",
    demand: 79,
    salaryRange: "$20-$32/hr",
    topSkills: ["AI Model Evaluation", "Prompt Engineering", "Data Quality", "Communication"],
    portfolioProof: "AI response evaluation rubric with scored examples"
  },
  {
    role: "Business Analyst",
    key: "business_analyst",
    demand: 76,
    salaryRange: "$23-$35/hr",
    topSkills: ["Requirements", "SQL", "Excel", "Agile"],
    portfolioProof: "Requirements package with process map and user stories"
  },
  {
    role: "Systems Analyst",
    key: "systems_analyst",
    demand: 73,
    salaryRange: "$24-$37/hr",
    topSkills: ["Systems Analysis", "Database Management", "Documentation", "Testing"],
    portfolioProof: "System design document with data model and workflows"
  },
  {
    role: "Software Engineering Intern",
    key: "software_engineer",
    demand: 88,
    salaryRange: "$28-$45/hr",
    topSkills: ["JavaScript", "APIs", "Testing", "GitHub"],
    portfolioProof: "Deployed app with documented features and issue history"
  },
  {
    role: "Cloud / IT Intern",
    key: "cloud_intern",
    demand: 71,
    salaryRange: "$22-$34/hr",
    topSkills: ["Cloud", "Troubleshooting", "Networking", "Documentation"],
    portfolioProof: "Deployment architecture notes and troubleshooting playbook"
  },
  {
    role: "Cybersecurity Analyst",
    key: "cybersecurity_analyst",
    demand: 78,
    salaryRange: "$25-$39/hr",
    topSkills: ["Security", "Incident Response", "Risk", "Networking"],
    portfolioProof: "Sample incident dashboard with severity and response notes"
  }
];

const evidenceTemplates = {
  "SQL": "Include a project with joins, filters, aggregations, and a short explanation of the business question answered.",
  "Python": "Show a notebook or script that cleans data, analyzes it, and produces a clear output.",
  "Excel": "Show pivot tables, formulas, and a before/after insight from spreadsheet data.",
  "Power BI": "Publish dashboard screenshots with measures, slicers, and a written insight summary.",
  "Tableau": "Include a dashboard or story view that explains a trend or comparison.",
  "Data Visualization": "Show charts that answer a decision question, not just decorate the page.",
  "Statistics": "Explain one metric, trend, or test and what decision it supports.",
  "Machine Learning": "Show model inputs, evaluation metrics, and what the prediction is useful for.",
  "Generative AI": "Show prompt design, evaluation criteria, and examples of quality improvements.",
  "Data Quality": "Document how you cleaned, validated, or checked data before analysis.",
  "JavaScript": "Link a live web app with interactive state, clean UI, and readable code.",
  "APIs": "Show data pulled from or structured like an API, then transformed into a useful output.",
  "Cloud": "Document where the app is deployed and what services or hosting choices were used.",
  "Cybersecurity": "Show a sample incident or log-analysis dashboard with severity and response notes.",
  "Networking": "Explain a troubleshooting scenario involving DNS, VPN, TCP/IP, or access issues.",
  "Troubleshooting": "Include a ticket-style case study with issue, diagnosis, fix, and prevention.",
  "Testing": "Add a test plan, test cases, and bug reports for one of your apps.",
  "UX Research": "Show interview notes, usability findings, and specific design recommendations.",
  "Product Metrics": "Create a funnel, retention, or adoption dashboard with recommended actions.",
  "Agile": "Show a sprint board, issue list, or team workflow from a project.",
  "Communication": "Add a concise project write-up that explains the problem, approach, and result.",
  "Business Analysis": "Include user stories, requirements, process map, and acceptance criteria.",
  "Project Management": "Show a project timeline, risks, milestones, and stakeholder update.",
  "GitHub": "Keep repos public, organized, and documented with strong README files."
};

const els = {
  targetRole: document.querySelector("#targetRole"),
  jobPostings: document.querySelector("#jobPostings"),
  resumeText: document.querySelector("#resumeText"),
  analyzeButton: document.querySelector("#analyzeButton"),
  sampleButton: document.querySelector("#sampleButton"),
  matchButton: document.querySelector("#matchButton"),
  copySummaryButton: document.querySelector("#copySummaryButton"),
  downloadReportButton: document.querySelector("#downloadReportButton"),
  navTabs: [...document.querySelectorAll(".nav-tab")],
  views: [...document.querySelectorAll(".view")],
  viewTitle: document.querySelector("#viewTitle"),
  postingCount: document.querySelector("#postingCount"),
  topSkill: document.querySelector("#topSkill"),
  resumeScore: document.querySelector("#resumeScore"),
  nextFocus: document.querySelector("#nextFocus"),
  datasetSignals: document.querySelector("#datasetSignals"),
  skillTotal: document.querySelector("#skillTotal"),
  skillBars: document.querySelector("#skillBars"),
  roadmap: document.querySelector("#roadmap"),
  marketSummary: document.querySelector("#marketSummary"),
  priorityInsights: document.querySelector("#priorityInsights"),
  decisionBrief: document.querySelector("#decisionBrief"),
  readinessLabel: document.querySelector("#readinessLabel"),
  roleFocus: document.querySelector("#roleFocus"),
  roleProject: document.querySelector("#roleProject"),
  roleCert: document.querySelector("#roleCert"),
  opportunityRadar: document.querySelector("#opportunityRadar"),
  evidenceChecklist: document.querySelector("#evidenceChecklist"),
  applicationPacket: document.querySelector("#applicationPacket"),
  skillMatrix: document.querySelector("#skillMatrix"),
  certGrid: document.querySelector("#certGrid"),
  comparisonGrid: document.querySelector("#comparisonGrid"),
  datasetTable: document.querySelector("#datasetTable"),
  gapCount: document.querySelector("#gapCount"),
  gapList: document.querySelector("#gapList"),
  bulletSuggestions: document.querySelector("#bulletSuggestions")
};

const state = {
  analysis: null,
  resume: "",
  resumeAnalysis: null
};

els.resumeText.value = "";
renderEmptyMarket();

els.targetRole.addEventListener("change", () => {
  if (els.targetRole.value) {
    els.jobPostings.value = "";
    renderEmptyMarket();
  }
});
els.sampleButton.addEventListener("click", () => {
  loadSample();
  if (els.jobPostings.value.trim()) analyzeMarket();
});
els.analyzeButton.addEventListener("click", analyzeMarket);
els.matchButton.addEventListener("click", analyzeResume);
els.copySummaryButton.addEventListener("click", copySummary);
els.downloadReportButton.addEventListener("click", downloadReport);
els.navTabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));

function loadSample() {
  const role = els.targetRole.value;
  if (!role) {
    window.alert("Select a target role first.");
    return;
  }
  els.jobPostings.value = samplePostings[role].join("\n\n");
}

function analyzeMarket() {
  if (!els.targetRole.value) {
    window.alert("Select a target role before analyzing.");
    return;
  }
  const postings = splitPostings(els.jobPostings.value);
  if (!postings.length) {
    window.alert("Paste job postings or load a sample before analyzing.");
    return;
  }
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

  state.resumeAnalysis = { demanded, present, missing, score };
  els.resumeScore.textContent = `${score}%`;
  els.gapCount.textContent = `${missing.length} gaps`;
  els.nextFocus.textContent = missing[0]?.name || demanded[0]?.name || "-";
  els.readinessLabel.textContent = getReadinessLabel(score);
  renderGaps(present, missing);
  renderRoadmap(missing, state.analysis.sortedCerts);
  renderEvidenceChecklist(demanded, present, missing);
  renderApplicationPacket(present, missing);
  renderBulletSuggestions(present, missing);
  renderPriorityInsights();
  renderDecisionBrief();
  els.marketSummary.textContent = buildSummary(state.analysis.postings, state.analysis.sortedSkills, state.analysis.sortedCerts);
}

function renderEmptyMarket() {
  state.analysis = null;
  state.resumeAnalysis = null;
  els.postingCount.textContent = "0";
  els.datasetSignals.textContent = laborMarketDataset.length;
  els.topSkill.textContent = "-";
  els.resumeScore.textContent = "0%";
  els.nextFocus.textContent = "-";
  els.skillTotal.textContent = "0 detected";
  els.readinessLabel.textContent = "Select role";
  els.roleFocus.textContent = "Choose a target role, then paste job postings or load a sample to generate market intelligence.";
  els.roleProject.textContent = "Portfolio recommendations will appear after analysis.";
  els.roleCert.textContent = "Certification guidance will appear after analysis.";
  els.skillBars.innerHTML = emptyState("Select a role and analyze postings to see skill demand.");
  els.roadmap.innerHTML = "<li>Select a role and analyze postings to generate a learning roadmap.</li>";
  els.evidenceChecklist.innerHTML = emptyState("Evidence requirements appear after analysis.");
  els.applicationPacket.innerHTML = emptyState("Analyze postings and compare a resume to generate application assets.");
  els.opportunityRadar.innerHTML = emptyState("Analyze a role to see market demand, proof strategy, and next action.");
  els.priorityInsights.innerHTML = emptyState("Analyze postings to generate priority insights.");
  els.decisionBrief.innerHTML = emptyState("A concise role decision brief will appear after analysis.");
  els.marketSummary.textContent = "No market analysis yet.";
  els.skillMatrix.innerHTML = emptyState("Analyze postings to populate the skills matrix.");
  els.certGrid.innerHTML = emptyState("Analyze postings to estimate certification demand.");
  els.gapCount.textContent = "0 gaps";
  els.gapList.innerHTML = emptyState("Paste a resume after analyzing postings to compare fit.");
  els.bulletSuggestions.innerHTML = emptyState("Resume bullet ideas appear after analysis.");
  renderComparison();
  renderDatasetTable();
}

function renderMarket() {
  const { postings, sortedSkills, sortedCerts } = state.analysis;
  const top = sortedSkills[0];

  els.postingCount.textContent = postings.length;
  els.datasetSignals.textContent = laborMarketDataset.length;
  els.topSkill.textContent = top?.name || "-";
  els.skillTotal.textContent = `${sortedSkills.filter(item => item.count > 0).length} detected`;
  renderBars(sortedSkills.slice(0, 12));
  renderMatrix(sortedSkills);
  renderCerts(sortedCerts);
  renderComparison();
  renderDatasetTable();
  renderRoleSnapshot();
  renderOpportunityRadar();
  renderApplicationPacket([], state.analysis.sortedSkills.filter(item => item.count > 0).slice(0, 4));
  renderPriorityInsights();
  renderDecisionBrief();
  els.marketSummary.textContent = buildSummary(postings, sortedSkills, sortedCerts);
}

function renderPriorityInsights() {
  if (!state.analysis) {
    els.priorityInsights.innerHTML = emptyState("Analyze postings to generate priority insights.");
    return;
  }
  const role = roleProfiles[els.targetRole.value];
  const topSkills = state.analysis.sortedSkills.filter(item => item.count > 0);
  const topCert = state.analysis.sortedCerts.find(item => item.count > 0)?.name || role.cert;
  const missing = state.resumeAnalysis?.missing || topSkills.slice(0, 4);
  const benchmark = laborMarketDataset.find(item => item.key === els.targetRole.value);
  const insights = [
    {
      title: "Lead with proof",
      body: `${topSkills[0]?.name || "Role evidence"} is the strongest signal in this posting set. Build or feature one portfolio artifact that proves it.`
    },
    {
      title: "Close the first resume gap",
      body: missing.length
        ? `${missing[0].name}: ${evidenceTemplates[missing[0].name] || "Add a concrete project example that proves this skill."}`
        : "Your resume covers the top detected skills. Improve by adding metrics, links, and stronger project outcomes."
    },
    {
      title: "Choose a credential intentionally",
      body: `${topCert} is the best current certification path for this role analysis. Prioritize it only if it supports your project proof.`
    },
    {
      title: "Know the market position",
      body: benchmark
        ? `${benchmark.role} shows ${benchmark.demand}/100 demand with an estimated student range of ${benchmark.salaryRange}.`
        : "The all-role view is useful for exploration, but choose one role before applying so your resume is targeted."
    }
  ];

  els.priorityInsights.innerHTML = insights.map((item, index) => `
    <div class="insight-card priority-${index + 1}">
      <span>Priority ${index + 1}</span>
      <h4>${item.title}</h4>
      <p class="summary">${item.body}</p>
    </div>
  `).join("");
}

function renderDecisionBrief() {
  if (!state.analysis) {
    els.decisionBrief.innerHTML = emptyState("A concise role decision brief will appear after analysis.");
    return;
  }
  const role = roleProfiles[els.targetRole.value];
  const benchmark = laborMarketDataset.find(item => item.key === els.targetRole.value);
  const score = state.resumeAnalysis?.score ?? 0;
  const fitLabel = state.resumeAnalysis ? getReadinessLabel(score) : "Resume pending";
  const topSkills = state.analysis.sortedSkills.filter(item => item.count > 0).slice(0, 4).map(item => item.name).join(", ") || "No skills detected";
  const gaps = state.resumeAnalysis?.missing?.slice(0, 3).map(item => item.name).join(", ") || "Paste resume text to calculate gaps";
  const rows = [
    ["Target role", role.label],
    ["Market demand", benchmark ? `${benchmark.demand}/100 demand, ${benchmark.salaryRange}` : `${state.analysis.postings.length} postings across student tech roles`],
    ["Top skills", topSkills],
    ["Resume fit", `${fitLabel}${state.resumeAnalysis ? ` (${score}%)` : ""}`],
    ["Priority gaps", gaps],
    ["Portfolio proof", role.project]
  ];

  els.decisionBrief.innerHTML = rows.map(([label, value]) => `
    <div class="brief-row">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
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
    `Week 1: Build portfolio proof. ${role.project}`,
    `Week 2: Add resume evidence for ${focus[0] || "your strongest demanded skill"} using a project bullet with tool, action, and result.`,
    `Week 3: Study toward ${cert} or complete a small project section that proves the same skill.`,
    `Week 4: Practice explaining ${focus[1] || role.focus} in a 30-second interview answer and post the finished project on LinkedIn.`
  ];

  els.roadmap.innerHTML = steps.map(step => `<li>${step}</li>`).join("");
}

function renderRoleSnapshot() {
  const role = roleProfiles[els.targetRole.value];
  els.roleFocus.textContent = role.focus;
  els.roleProject.textContent = role.project;
  els.roleCert.textContent = role.cert;
}

function renderOpportunityRadar() {
  if (!state.analysis) {
    els.opportunityRadar.innerHTML = emptyState("Analyze a role to see market demand, proof strategy, and next action.");
    return;
  }
  const selected = els.targetRole.value;
  const role = roleProfiles[selected];
  const benchmark = laborMarketDataset.find(item => item.key === selected);
  const topSkills = state.analysis.sortedSkills.filter(item => item.count > 0);
  const topCert = state.analysis.sortedCerts.find(item => item.count > 0)?.name || role.cert;
  const score = state.resumeAnalysis?.score ?? 0;
  const readiness = state.resumeAnalysis ? `${score}% resume match` : "Resume not compared";
  const demand = benchmark ? `${benchmark.demand}/100` : `${state.analysis.postings.length} postings`;
  const salary = benchmark?.salaryRange || "Varies by role";
  const nextSkill = state.resumeAnalysis?.missing?.[0]?.name || topSkills[0]?.name || "Role proof";
  const cards = [
    ["Market pull", demand, `Estimated range: ${salary}`],
    ["Resume fit", readiness, state.resumeAnalysis ? getReadinessLabel(score) : "Paste resume text for a fit score"],
    ["Best proof", nextSkill, evidenceTemplates[nextSkill] || role.project],
    ["Credential signal", topCert, "Use the cert to support a project, not replace one"]
  ];
  els.opportunityRadar.innerHTML = cards.map(([label, value, body]) => `
    <div class="radar-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <p class="summary">${body}</p>
    </div>
  `).join("");
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
    <div class="cert-card ${cert.name === role.cert ? "priority" : ""}">
      ${cert.name === role.cert ? '<span class="priority-label">Recommended path</span>' : ""}
      <h4>${cert.name}</h4>
      <p class="summary">${cert.count > 0 ? `${cert.count} matching market signals found.` : cert.name === role.cert ? "Recommended for this role even if the sample postings do not name it directly." : "No direct signals in this posting set."}</p>
    </div>
  `).join("");
}

function renderComparison() {
  const selected = els.targetRole.value;
  const cards = laborMarketDataset
    .slice()
    .sort((a, b) => b.demand - a.demand)
    .map(item => {
      const active = item.key === selected || (selected === "all" && item.demand >= 82);
      return `
        <div class="comparison-card ${active ? "active" : ""}">
          <div>
            <span class="priority-label">${item.demand}/100 demand</span>
            <h4>${item.role}</h4>
          </div>
          <p class="summary"><strong>Estimated student range:</strong> ${item.salaryRange}</p>
          <p class="summary"><strong>Top skills:</strong> ${item.topSkills.join(", ")}</p>
          <p class="summary"><strong>Portfolio proof:</strong> ${item.portfolioProof}</p>
        </div>
      `;
    });
  els.comparisonGrid.innerHTML = cards.join("");
}

function renderDatasetTable() {
  els.datasetTable.innerHTML = `
    <div class="dataset-row heading">
      <span>Role</span>
      <span>Demand</span>
      <span>Range</span>
      <span>Proof</span>
    </div>
    ${laborMarketDataset.map(item => `
      <div class="dataset-row">
        <span>${item.role}</span>
        <span>${item.demand}/100</span>
        <span>${item.salaryRange}</span>
        <span>${item.portfolioProof}</span>
      </div>
    `).join("")}
  `;
}

function renderGaps(present, missing) {
  const cards = [
    ...missing.map(item => ({ ...item, status: "missing" })),
    ...present.map(item => ({ ...item, status: "present" }))
  ];

  els.gapList.innerHTML = cards.map(item => `
    <div class="gap-card ${item.status}">
      <h4>${item.name}</h4>
      <p class="summary">${item.status === "missing" ? `Missing from resume. ${evidenceTemplates[item.name] || "Add a concrete project example that proves this skill."}` : "Already visible in your resume."}</p>
    </div>
  `).join("");
}

function renderEvidenceChecklist(demanded, present, missing) {
  const topDemanded = demanded.slice(0, 8);
  const presentNames = new Set(present.map(item => item.name));
  const missingNames = new Set(missing.map(item => item.name));

  els.evidenceChecklist.innerHTML = topDemanded.map(item => {
    const status = presentNames.has(item.name) && !missingNames.has(item.name) ? "done" : "todo";
    return `
      <div class="check-card ${status}">
        <h4>${item.name}</h4>
        <p class="summary">${evidenceTemplates[item.name] || "Show this skill through a project, dashboard, report, or case study."}</p>
      </div>
    `;
  }).join("");
}

function renderApplicationPacket(present = [], missing = []) {
  if (!state.analysis) {
    els.applicationPacket.innerHTML = emptyState("Analyze postings and compare a resume to generate application assets.");
    return;
  }

  const role = roleProfiles[els.targetRole.value];
  const topSkills = state.analysis.sortedSkills.filter(item => item.count > 0);
  const strongestSkill = present[0]?.name || topSkills[0]?.name || "role-specific evidence";
  const firstGap = missing[0]?.name || topSkills[1]?.name || "a stronger project outcome";
  const benchmark = laborMarketDataset.find(item => item.key === els.targetRole.value);
  const proof = benchmark?.portfolioProof || role.project;
  const readiness = state.resumeAnalysis ? getReadinessLabel(state.resumeAnalysis.score) : "Resume pending";
  const assets = [
    {
      label: "LinkedIn headline",
      text: `${role.label} candidate focused on ${strongestSkill}, student career systems, and portfolio-backed problem solving.`
    },
    {
      label: "Resume focus",
      text: `Add one bullet proving ${firstGap} with action, tool, and result before applying to this role.`
    },
    {
      label: "Portfolio proof",
      text: proof
    },
    {
      label: "Interview story",
      text: `Explain how you used CareerLens to compare market demand, identify ${firstGap}, and choose a focused next project.`
    },
    {
      label: "Readiness note",
      text: `${readiness}${state.resumeAnalysis ? ` at ${state.resumeAnalysis.score}% resume match` : ""}. Use this as a checkpoint, not a final judgment.`
    }
  ];

  els.applicationPacket.innerHTML = assets.map(item => `
    <div class="packet-card">
      <span>${item.label}</span>
      <p class="summary">${item.text}</p>
    </div>
  `).join("");
}

function renderBulletSuggestions(present, missing) {
  const role = roleProfiles[els.targetRole.value];
  const targetSkills = [...missing.slice(0, 3), ...present.slice(0, 2)].slice(0, 5);

  els.bulletSuggestions.innerHTML = targetSkills.map(item => `
    <div class="bullet-card">
      <h4>${item.name}</h4>
      <p class="summary">Resume bullet idea: Built a ${role.label.toLowerCase()} portfolio artifact using ${item.name} to ${getSkillAction(item.name)}.</p>
    </div>
  `).join("");
}

function buildSummary(postings, skills, certs) {
  const role = roleProfiles[els.targetRole.value];
  const benchmark = laborMarketDataset.find(item => item.key === els.targetRole.value);
  const topSkills = skills.slice(0, 6).map(item => item.name).join(", ");
  const topCert = certs.find(item => item.count > 0)?.name || role.cert;
  const readiness = state.resumeAnalysis ? getReadinessLabel(state.resumeAnalysis.score) : "Readiness pending";
  const benchmarkLine = benchmark ? ` The built-in benchmark estimates ${benchmark.demand}/100 demand and a student range of ${benchmark.salaryRange}.` : "";
  return `${role.label}: ${role.focus} CareerLens analyzed ${postings.length} role-focused postings and found strongest demand for ${topSkills}. Current readiness: ${readiness}. The most relevant certification path is ${topCert}.${benchmarkLine} Recommended portfolio proof: ${role.project}`;
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
    compare: "Role Comparison",
    resume: "Resume Match"
  };

  els.viewTitle.textContent = titles[view];
  els.navTabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  els.views.forEach(section => section.classList.toggle("active", section.id === `${view}View`));
}

function emptyState(message) {
  return `<div class="empty-state">${message}</div>`;
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

function downloadReport() {
  if (!state.analysis || !state.resumeAnalysis) return;

  const role = roleProfiles[els.targetRole.value];
  const topSkills = state.analysis.sortedSkills
    .filter(item => item.count > 0)
    .slice(0, 10)
    .map(item => `${item.name} (${item.count})`)
    .join(", ");
  const gaps = state.resumeAnalysis.missing.slice(0, 8).map(item => item.name).join(", ") || "No major gaps detected";
  const cert = state.analysis.sortedCerts.find(item => item.count > 0)?.name || role.cert;
  const benchmark = laborMarketDataset.find(item => item.key === els.targetRole.value);
  const lines = [
    "CareerLens Report",
    `Role,${csv(role.label)}`,
    `Readiness,${csv(getReadinessLabel(state.resumeAnalysis.score))}`,
    `Resume Match,${state.resumeAnalysis.score}%`,
    `Postings Analyzed,${state.analysis.postings.length}`,
    `Top Skills,${csv(topSkills)}`,
    `Priority Gaps,${csv(gaps)}`,
    `Recommended Certification,${csv(cert)}`,
    `Benchmark Demand,${csv(benchmark ? `${benchmark.demand}/100` : "All-role view")}`,
    `Estimated Student Range,${csv(benchmark?.salaryRange || "Varies by role")}`,
    `Portfolio Project,${csv(role.project)}`,
    `Market Summary,${csv(els.marketSummary.textContent)}`
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `careerlens-${els.targetRole.value}-report.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function getReadinessLabel(score) {
  if (score >= 80) return "Competitive";
  if (score >= 60) return "Close, needs proof";
  if (score >= 35) return "Developing";
  return "Early stage";
}

function getSkillAction(skill) {
  const actions = {
    "SQL": "query, clean, and summarize role-relevant data for decision-making",
    "Python": "automate analysis and produce repeatable insights",
    "Excel": "organize raw data into clear summary tables and metrics",
    "Power BI": "turn raw data into an interactive dashboard with decision-ready KPIs",
    "Data Visualization": "communicate trends and recommendations clearly",
    "Statistics": "evaluate patterns and support conclusions with evidence",
    "Machine Learning": "train and evaluate a predictive model",
    "Generative AI": "evaluate AI outputs and improve prompt quality",
    "Cybersecurity": "classify incidents, prioritize risk, and recommend response steps",
    "UX Research": "identify user pain points and recommend product improvements",
    "Business Analysis": "translate stakeholder needs into clear requirements",
    "Project Management": "coordinate tasks, risks, milestones, and stakeholder updates",
    "Testing": "validate product quality through test cases and bug reports",
    "APIs": "integrate structured data into a working application",
    "Cloud": "deploy and document a reliable hosted solution"
  };

  return actions[skill] || "solve a role-relevant problem with measurable results";
}

function csv(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
