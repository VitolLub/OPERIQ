import { CalendarClock, TriangleAlert } from "lucide-react";
import type { CalendarSignal } from "@/types/domain";

type CalendarPreviewProps = {
  events: CalendarSignal[];
};

export function CalendarPreview({ events }: CalendarPreviewProps) {
  return (
    <div className="rounded-lg border border-field-200 bg-white shadow-panel">
      <div className="border-b border-field-200 px-4 py-3">
        <h2 className="flex items-center gap-2 text-base font-semibold text-ink-950">
          <CalendarClock size={18} aria-hidden="true" />
          Calendar Intelligence
        </h2>
      </div>
      <div className="divide-y divide-field-200">
        {events.map((event) => (
          <div key={event.id} className="grid grid-cols-[4rem_1fr] gap-3 px-4 py-3">
            <time className="text-sm font-semibold text-ink-950">{event.time}</time>
            <div>
              <p className="text-sm font-medium text-ink-950">{event.title}</p>
              <p className="mt-1 text-sm leading-6 text-ink-600">{event.context}</p>
              {event.riskHint ? (
                <p className="mt-2 inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-signal-amber">
                  <TriangleAlert size={13} aria-hidden="true" />
                  {event.riskHint}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
