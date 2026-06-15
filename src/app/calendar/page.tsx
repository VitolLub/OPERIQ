import { CalendarPreview } from "@/components/CalendarPreview";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { mockCalendar } from "@/lib/mock-calendar";

export default function CalendarPage() {
  return (
    <>
      <TopBar
        title="Calendar Pressure"
        description="Upcoming meetings and protected windows that influence risk handling and decision timing."
      />
      <div className="grid gap-6 px-4 py-6 md:px-6 xl:grid-cols-[1fr_22rem]">
        <CalendarPreview events={mockCalendar} />
        <DashboardSection title="Timing Notes">
          <div className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
            <p className="text-sm leading-6 text-ink-600">
              Today has one high-risk decision checkpoint, one customer-facing review, and one possible approval window.
              The calendar view is mock-only and does not connect to external calendars.
            </p>
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
