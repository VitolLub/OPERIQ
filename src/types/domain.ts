import type { LucideIcon } from "lucide-react";

export type RiskLevel = "critical" | "high" | "medium" | "low";
export type ActionPriority = "urgent" | "high" | "normal";
export type ProjectSignal = "stable" | "watch" | "at-risk";

export type Risk = {
  id: string;
  title: string;
  level: RiskLevel;
  source: string;
  impact: string;
  confidence: number;
  detectedAt: string;
};

export type RecommendedAction = {
  id: string;
  title: string;
  priority: ActionPriority;
  reason: string;
  ownerContext: string;
  suggestedWindow: string;
};

export type ProjectPulse = {
  id: string;
  name: string;
  signal: ProjectSignal;
  executiveSummary: string;
  nextReview: string;
  riskCount: number;
};

export type CalendarSignal = {
  id: string;
  title: string;
  time: string;
  context: string;
  riskHint?: string;
};

export type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};
