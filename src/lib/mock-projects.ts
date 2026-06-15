import type { ProjectPulse } from "@/types/domain";

export const mockProjects: ProjectPulse[] = [
  {
    id: "project-001",
    name: "Enterprise renewal cycle",
    signal: "at-risk",
    executiveSummary: "Pricing, legal, and approval paths are converging inside the same week.",
    nextReview: "Today",
    riskCount: 3,
  },
  {
    id: "project-002",
    name: "Regional operating model",
    signal: "watch",
    executiveSummary: "Stakeholder inputs are complete, but calendar capacity is tightening.",
    nextReview: "Tomorrow",
    riskCount: 1,
  },
  {
    id: "project-003",
    name: "Quarterly board package",
    signal: "stable",
    executiveSummary: "Document readiness is tracking cleanly with one finance appendix pending.",
    nextReview: "Friday",
    riskCount: 0,
  },
];
