CREATE TABLE IF NOT EXISTS job_postings (
  id INTEGER PRIMARY KEY,
  role_category TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT,
  location TEXT,
  description TEXT NOT NULL,
  collected_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skill_mentions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  posting_id INTEGER NOT NULL,
  skill TEXT NOT NULL,
  matched_keyword TEXT NOT NULL,
  FOREIGN KEY (posting_id) REFERENCES job_postings(id)
);

CREATE TABLE IF NOT EXISTS role_skill_summary (
  role_category TEXT NOT NULL,
  skill TEXT NOT NULL,
  mentions INTEGER NOT NULL,
  posting_coverage REAL NOT NULL,
  PRIMARY KEY (role_category, skill)
);

CREATE TABLE IF NOT EXISTS resume_gap_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  target_role TEXT NOT NULL,
  resume_text TEXT NOT NULL,
  matched_skills TEXT NOT NULL,
  missing_skills TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
