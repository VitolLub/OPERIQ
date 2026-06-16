import type { RecommendedAction, Risk } from "@/types/domain";

export const dashboardCriticalRisks: Risk[] = [
  {
    id: "risk-briefing-001",
    title: "Renewal pricing decision is inside the escalation window",
    level: "critical",
    source: "Commercial operating review",
    impact:
      "If pricing direction is not confirmed today, the account team enters negotiation without approved guardrails.",
    confidence: 93,
    detectedAt: "07:42",
  },
  {
    id: "risk-briefing-002",
    title: "Leadership approval capacity is below expected decision load",
    level: "critical",
    source: "Calendar capacity scan",
    impact:
      "Three decisions require executive attention before Friday, with only one protected review block available.",
    confidence: 88,
    detectedAt: "08:18",
  },
  {
    id: "risk-briefing-003",
    title: "Customer sentiment is moving faster than response alignment",
    level: "high",
    source: "Stakeholder signal digest",
    impact:
      "The customer sponsor is likely to ask for a recovery position before internal owners have aligned.",
    confidence: 84,
    detectedAt: "09:06",
  },
];

export const dashboardTodayActions: RecommendedAction[] = [
  {
    id: "today-action-001",
    title: "Lock renewal guardrails before the 14:00 review",
    priority: "urgent",
    reason:
      "The operating risk is not the meeting itself; it is entering the meeting without an approved negotiation range.",
    ownerContext: "Finance approver, commercial sponsor, operations lead",
    suggestedWindow: "Today, 10:30-11:15",
  },
  {
    id: "today-action-002",
    title: "Convert the customer response into a single executive position",
    priority: "high",
    reason:
      "Multiple internal narratives are creating avoidable ambiguity ahead of the customer operations call.",
    ownerContext: "Account sponsor and delivery lead",
    suggestedWindow: "Today, before 13:00",
  },
  {
    id: "today-action-003",
    title: "Protect one decision block for approval sequencing",
    priority: "normal",
    reason:
      "A short protected window prevents three unrelated approvals from competing for the same executive attention.",
    ownerContext: "Chief of staff",
    suggestedWindow: "Today, 16:00-16:45",
  },
];

export const nextFourWeeks = [
  {
    id: "week-01",
    window: "Week 1",
    title: "Commercial renewal closes negotiation phase",
    operatingRead: "High leverage, low tolerance for ambiguity.",
    pressure: "Pricing guardrails and legal fallback need executive confirmation.",
    move: "Resolve the decision range before customer-facing discussions continue.",
    tone: "critical",
  },
  {
    id: "week-02",
    window: "Week 2",
    title: "Regional operating model moves into sponsor review",
    operatingRead: "Healthy progress, but stakeholder appetite is uneven.",
    pressure: "Two regional leads have not confirmed implementation assumptions.",
    move: "Surface the unresolved assumptions as a sponsor-level decision.",
    tone: "watch",
  },
  {
    id: "week-03",
    window: "Week 3",
    title: "Quarterly board package enters final evidence pass",
    operatingRead: "Stable, with one dependency on finance commentary.",
    pressure: "Finance narrative must match the commercial renewal position.",
    move: "Keep finance commentary aligned with the renewal decision path.",
    tone: "stable",
  },
  {
    id: "week-04",
    window: "Week 4",
    title: "Customer health review cycle starts",
    operatingRead: "Potential upside if escalation is resolved this week.",
    pressure: "Customer success narrative depends on current recovery posture.",
    move: "Prepare a concise operating story before account planning begins.",
    tone: "watch",
  },
];

export const calendarWeek = [
  {
    id: "mon",
    day: "Mon",
    focus: "Decision preparation",
    signal: "Renewal range and approval path require alignment.",
    recommendation: "Use the morning to remove pricing ambiguity.",
  },
  {
    id: "tue",
    day: "Tue",
    focus: "Customer operating review",
    signal: "Sponsor expectations are likely to sharpen.",
    recommendation: "Enter with one recovery narrative and owner map.",
  },
  {
    id: "wed",
    day: "Wed",
    focus: "Leadership capacity",
    signal: "Decision load peaks while calendar availability narrows.",
    recommendation: "Batch approvals into a single executive briefing.",
  },
  {
    id: "thu",
    day: "Thu",
    focus: "Regional sponsor readout",
    signal: "Implementation assumptions need clearer executive framing.",
    recommendation: "Separate confirmed facts from unresolved choices.",
  },
  {
    id: "fri",
    day: "Fri",
    focus: "Operating closeout",
    signal: "Week-end risks depend on earlier decision quality.",
    recommendation: "Close the loop on commitments and residual risks.",
  },
];

export const processedInformation = [
  {
    id: "processed-001",
    label: "Signals reviewed",
    value: "186",
    detail: "Calendar movements, operating notes, decision logs, and commercial updates.",
  },
  {
    id: "processed-002",
    label: "Risk patterns detected",
    value: "14",
    detail: "Timing conflicts, approval gaps, sentiment changes, and dependency compression.",
  },
  {
    id: "processed-003",
    label: "Recommendations formed",
    value: "9",
    detail: "Prioritized by urgency, reversibility, stakeholder exposure, and calendar pressure.",
  },
  {
    id: "processed-004",
    label: "Briefing confidence",
    value: "87%",
    detail: "Based on consistency across mock operational sources and timing signals.",
  },
];
