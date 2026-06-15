import type { CalendarSignal } from "@/types/domain";

export const mockCalendar: CalendarSignal[] = [
  {
    id: "cal-001",
    title: "Renewal pricing checkpoint",
    time: "11:30",
    context: "Decision meeting with finance input required.",
    riskHint: "No pre-read confirmed.",
  },
  {
    id: "cal-002",
    title: "Customer operations review",
    time: "14:00",
    context: "Likely escalation framing needed before call.",
  },
  {
    id: "cal-003",
    title: "Leadership approval block",
    time: "16:30",
    context: "Best available window for open approvals.",
    riskHint: "Competing calendar hold.",
  },
];
