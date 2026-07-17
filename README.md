# CareerLens

![CareerLens thumbnail](thumbnail.png)

CareerLens is a labor market intelligence dashboard for students preparing for internships and entry-level technology roles. It helps users understand what employers are asking for, compare their resume against market demand, and choose the next skills, projects, and certifications to prioritize.

## Live Demo

[Open CareerLens](https://jasonbinong.github.io/CareerLens-AI/)

## What It Does

CareerLens turns job posting text into a practical career-readiness report. Students can paste internship descriptions, choose a target role, scan demand across skills and certifications, and generate a learning roadmap based on gaps between their resume and the market.

## Features

- Paste or load job postings
- Choose from 19 student-facing tech roles
- Analyze skill demand across postings
- Generate priority insights that turn market signals into next actions
- Produce an advisor-ready decision brief for the selected role
- Run a reusable CSV job-posting analysis pipeline
- Track certification signals
- Compare resume text against market demand
- Generate a prioritized learning roadmap
- Get role-specific project and certification recommendations
- View readiness level and critical resume gaps
- Generate role-specific portfolio evidence checklists
- Generate resume bullet ideas from missing skills
- Identify the first resume gap to close and the strongest portfolio proof to lead with
- Compare early-career tech roles with built-in benchmark signals
- View a curated market dataset with demand, estimated student salary ranges, top skills, and portfolio proof
- Copy a market summary for advising, LinkedIn, or portfolio notes
- Download a CSV career-readiness report
- SQL schema for storing postings, skill mentions, role summaries, and resume gap reports
- Deployable as a static GitHub Pages app

## Tech Stack

- HTML
- CSS
- JavaScript
- In-browser text analysis
- Python
- CSV analysis pipeline
- SQL schema

## What This Project Shows

- Data analysis applied to career planning
- Information systems thinking around labor market signals
- Frontend dashboard design and interactive reporting
- Reusable data pipeline design for job posting analysis
- Relational modeling for market intelligence data
- AI/product strategy for student career decision support
- Labor market benchmarking and role comparison

## Case Study

### Problem

Students often apply to internships without knowing which skills, certifications, and portfolio evidence employers are repeatedly asking for. Job descriptions contain useful signals, but those signals are hard to compare manually across roles.

### Solution

CareerLens turns job posting text into a career-readiness report. Users select a target role, paste postings or load sample data, analyze skill and certification demand, compare resume text against role requirements, and generate a focused learning roadmap.

### Key Design Decisions

- Requires the user to select a role before analysis so the output is personalized
- Uses in-browser text analysis to stay fast, private, and deployable on GitHub Pages
- Adds Priority Insights and a Decision Brief so the analysis produces an actionable recommendation, not just charts
- Adds a Python CSV pipeline so the analysis can scale beyond the browser demo
- Includes a SQL schema to show how postings, skill mentions, and resume gap reports could be stored
- Groups roles into student-facing categories such as data, AI, information systems, software, cloud, and security
- Adds a benchmark dataset so users can compare demand, estimated student salary ranges, top skills, and portfolio proof by role

### What I Learned

This project helped me connect data analytics, career technology, and information systems. I practiced turning unstructured text into structured insights and designing a dashboard that explains not only what skills are missing, but what evidence a student should build next.

### Future Improvements

- Add a Python backend for larger job posting ingestion
- Store posting history and user reports in SQL
- Add live job-board API integrations
- Build a Power BI dashboard from exported CareerLens reports

## How To Run

Open `index.html` in a browser.

## Data Pipeline

CareerLens also includes a Python pipeline for analyzing job posting CSV files.

```bash
python scripts/analyze_postings.py
```

This reads:

```text
data/sample_postings.csv
```

And writes:

```text
output/market_report.json
output/role_skill_summary.csv
```

## Future Upgrade Path

- Add a Python backend for job posting ingestion
- Store posting history in SQL
- Connect live job board APIs
- Add OpenAI-powered resume rewrite suggestions
- Export Power BI-ready CSV summaries
