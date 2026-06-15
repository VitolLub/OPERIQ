import type { RecommendedAction } from "@/types/domain";

export const mockActions: RecommendedAction[] = [
  {
    id: "action-001",
    title: "Prepare renewal decision brief",
    priority: "urgent",
    reason: "A critical commercial decision is time-boxed and lacks a clear owner narrative.",
    ownerContext: "Operations lead and finance approver",
    suggestedWindow: "Today, 13:00-14:00",
  },
  {
    id: "action-002",
    title: "Align customer escalation response",
    priority: "high",
    reason: "Stakeholder sentiment indicates a response should land before the next status call.",
    ownerContext: "Account sponsor",
    suggestedWindow: "Tomorrow morning",
  },
  {
    id: "action-003",
    title: "Reserve approval review block",
    priority: "normal",
    reason: "Calendar pressure is the main blocker for two pending operational decisions.",
    ownerContext: "Chief of staff",
    suggestedWindow: "Before 16:00",
  },
];
