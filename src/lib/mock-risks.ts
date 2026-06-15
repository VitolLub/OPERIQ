import type { Risk } from "@/types/domain";

export const mockRisks: Risk[] = [
  {
    id: "risk-001",
    title: "Decision dependency approaching SLA breach",
    level: "critical",
    source: "Procurement renewal briefing",
    impact: "Vendor terms may roll over without negotiated pricing protection.",
    confidence: 91,
    detectedAt: "08:14",
  },
  {
    id: "risk-002",
    title: "Escalation language increased in stakeholder updates",
    level: "high",
    source: "Customer operations digest",
    impact: "Commercial conversation likely needs executive framing before Thursday.",
    confidence: 84,
    detectedAt: "09:05",
  },
  {
    id: "risk-003",
    title: "Calendar density may delay required approvals",
    level: "medium",
    source: "Leadership calendar scan",
    impact: "Two approvals have no protected review window before close of business.",
    confidence: 77,
    detectedAt: "10:22",
  },
];
