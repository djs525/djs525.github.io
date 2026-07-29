/**
 * Every factual claim in this file was approved verbatim by Dev Shah.
 * Do not add, reword, or "improve" a claim here without his explicit sign-off,
 * and never transcribe from a résumé PDF — several of those conflict with each
 * other. See PRODUCT.md → Evidence on Hand.
 *
 * Corrections already applied, not to be reintroduced: 100+ queries/day (not
 * 500+), 78% recall (not 87% accuracy), Streamlit (not React), no MLflow, no
 * "MLOps", no predictions/day figure, and no percentages in leadership.
 */

export interface HistoryEntry {
  readonly id: string;
  readonly org: string;
  readonly role: string;
  readonly period: string;
  readonly place: string;
  readonly bullets: readonly string[];
  /** Short factual figures, surfaced as stat chips. */
  readonly stats?: readonly string[];
  readonly stack?: string;
}

export const EXPERIENCE: readonly HistoryEntry[] = [
  {
    id: "dev-info-tech",
    org: "Dev Info Tech NA Limited",
    role: "AI Engineer Intern",
    period: "May – Aug 2025",
    place: "Remote",
    bullets: [
      "I built a natural-language search interface for a grocery retail client: a FastAPI service that translates plain-English queries into parameterized SQL against a live PostgreSQL product database, with guardrails validating output for safety and schema correctness before execution.",
      "I extended the pipeline with a threshold-driven automation layer: results checked against reorder levels trigger webhook and PostgreSQL alerts, scoped dynamically to user intent — 100+ queries/day at 90% accuracy.",
      "I containerized the service with Docker and exposed REST endpoints for downstream integrations, and added structured logging and input sanitization against prompt injection and malformed SQL.",
    ],
    stats: ["100+ QUERIES / DAY", "90% ACCURACY"],
    stack: "Python · LangChain · Gemini API · FastAPI · PostgreSQL · Docker",
  },
  {
    id: "mbs-externship",
    org: "Rutgers MBS Externship Exchange — New Castle Public Library",
    role: "Lead Data Scientist Extern",
    period: "Jan – Apr 2024",
    place: "New Brunswick, NJ",
    bullets: [
      "I built a donor-churn model (Random Forest, Logistic Regression) optimized for 78% recall to prioritize catching at-risk donors, driving targeted outreach that lifted retention 10% and protected $50K+ in annual donations.",
      "I applied ARIMA and Prophet time-series forecasting to model donor activity and staffing cycles, improving operational efficiency 25% and reducing overstaffing during low-demand periods.",
    ],
    stats: ["78% RECALL", "$50K+ PROTECTED"],
    stack: "Python · R · Flask · Streamlit",
  },
];

export const LEADERSHIP: readonly HistoryEntry[] = [
  {
    id: "student-affairs",
    org: "Rutgers Division of Student Affairs",
    role: "Area Manager · Operations Manager",
    period: "Apr 2024 – May 2026",
    place: "New Brunswick, NJ",
    bullets: [
      "Area Manager (Apr 2025 – May 2026), Operations Manager (Apr 2024 – Apr 2025). I supervised 60+ staff across multi-site zones and coordinated maintenance, security, and event teams for 200+ monthly events.",
    ],
    stats: ["60+ STAFF", "200+ EVENTS / MO"],
  },
  {
    id: "learning-assistant",
    org: "Rutgers University — New Brunswick",
    role: "Learning Assistant, Precalculus",
    period: "Aug 2024 – May 2026",
    place: "New Brunswick, NJ",
    bullets: [
      "I led weekly tutoring sessions, enabling ~30 students to advance into Calculus I.",
    ],
    stats: ["~30 STUDENTS ADVANCED"],
  },
];
