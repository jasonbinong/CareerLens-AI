import argparse
import csv
import json
from collections import Counter, defaultdict
from pathlib import Path


SKILL_CATALOG = {
    "SQL": ["sql", "joins", "relational"],
    "Python": ["python", "pandas", "numpy", "jupyter"],
    "Excel": ["excel", "pivot", "spreadsheet"],
    "Power BI": ["power bi", "dax", "power query"],
    "Data Visualization": ["visualization", "dashboard", "dashboards", "charts", "reporting"],
    "Statistics": ["statistics", "regression", "experimentation", "a/b"],
    "Generative AI": ["generative ai", "llm", "prompt", "prompt engineering"],
    "AI Model Evaluation": ["model evaluation", "evaluate llm", "response evaluator", "rubric scoring"],
    "Data Quality": ["data quality", "validation", "clean", "cleaning"],
    "JavaScript": ["javascript", "html", "css", "frontend", "web apps"],
    "APIs": ["api", "apis", "json", "integration"],
    "Cloud Computing": ["cloud", "aws", "azure", "oci", "oracle cloud"],
    "Cybersecurity": ["security", "cybersecurity", "siem", "incident", "vulnerability"],
    "Networking": ["networking", "dns", "tcp/ip", "vpn"],
    "Testing": ["testing", "tests", "qa", "bug"],
    "Product Metrics": ["product metrics", "funnel", "retention", "adoption"],
    "Agile": ["agile", "scrum", "sprint", "kanban"],
    "Communication": ["communication", "stakeholder", "presentation", "documentation"],
    "Business Analysis": ["business analysis", "requirements", "process", "user stories"],
    "GitHub": ["github", "git", "version control"],
}


def read_postings(path):
    with open(path, newline="", encoding="utf-8") as file:
        return list(csv.DictReader(file))


def detect_skills(text):
    normalized = text.lower()
    matches = {}
    for skill, keywords in SKILL_CATALOG.items():
        found = [keyword for keyword in keywords if keyword in normalized]
        if found:
            matches[skill] = found[0]
    return matches


def analyze(postings):
    role_totals = Counter()
    global_counts = Counter()
    role_counts = defaultdict(Counter)
    mentions = []

    for posting in postings:
        role = posting["role_category"]
        text = f"{posting.get('title', '')} {posting.get('description', '')}"
        detected = detect_skills(text)
        role_totals[role] += 1
        for skill, keyword in detected.items():
            global_counts[skill] += 1
            role_counts[role][skill] += 1
            mentions.append(
                {
                    "posting_id": posting["id"],
                    "role_category": role,
                    "skill": skill,
                    "matched_keyword": keyword,
                }
            )

    role_summary = {}
    for role, counts in role_counts.items():
        total = role_totals[role]
        role_summary[role] = [
            {
                "skill": skill,
                "mentions": count,
                "posting_coverage": round(count / total, 2),
            }
            for skill, count in counts.most_common()
        ]

    return {
        "posting_count": len(postings),
        "top_skills": [{"skill": skill, "mentions": count} for skill, count in global_counts.most_common()],
        "role_summary": role_summary,
        "skill_mentions": mentions,
    }


def write_csv_report(report, path):
    with open(path, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=["role_category", "skill", "mentions", "posting_coverage"])
        writer.writeheader()
        for role, rows in report["role_summary"].items():
            for row in rows:
                writer.writerow({"role_category": role, **row})


def main():
    parser = argparse.ArgumentParser(description="Analyze job posting skill demand for CareerLens AI.")
    parser.add_argument("--input", default="data/sample_postings.csv", help="CSV file with job postings")
    parser.add_argument("--json", default="output/market_report.json", help="Output JSON report path")
    parser.add_argument("--csv", default="output/role_skill_summary.csv", help="Output CSV summary path")
    args = parser.parse_args()

    input_path = Path(args.input)
    json_path = Path(args.json)
    csv_path = Path(args.csv)
    json_path.parent.mkdir(parents=True, exist_ok=True)
    csv_path.parent.mkdir(parents=True, exist_ok=True)

    report = analyze(read_postings(input_path))
    json_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    write_csv_report(report, csv_path)
    print(f"Analyzed {report['posting_count']} postings")
    print(f"Wrote {json_path}")
    print(f"Wrote {csv_path}")


if __name__ == "__main__":
    main()
