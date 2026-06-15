import { ActionCard } from "@/components/ActionCard";
import { CalendarPreview } from "@/components/CalendarPreview";
import { DashboardSection } from "@/components/DashboardSection";
import { RiskCard } from "@/components/RiskCard";
import { TopBar } from "@/components/TopBar";
import { mockActions } from "@/lib/mock-actions";
import { mockCalendar } from "@/lib/mock-calendar";
import { mockProjects } from "@/lib/mock-projects";
import { mockRisks } from "@/lib/mock-risks";

export default function DashboardPage() {
  const criticalRisks = mockRisks.filter((risk) => risk.level === "critical").length;
  const recommendations = mockActions.length;
  const watchProjects = mockProjects.filter((project) => project.signal !== "stable").length;

  return (
    <>
      <TopBar
        title="Today"
        description="A concise operational view of risks, recommendations, and calendar pressure across active business signals."
      />
      <div className="space-y-8 px-4 py-6 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Critical risks", criticalRisks.toString(), "Need same-day review"],
            ["Recommended actions", recommendations.toString(), "Sequenced by urgency"],
            ["Projects on watch", watchProjects.toString(), "Require closer briefing"],
          ].map(([label, value, helper]) => (
            <div key={label} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
              <p className="text-xs font-semibold uppercase text-ink-600">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-ink-950">{value}</p>
              <p className="mt-1 text-sm text-ink-600">{helper}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_24rem]">
          <div className="space-y-8">
            <DashboardSection
              title="Risk Detection"
              description="Signals that may affect decisions, commitments, or executive attention."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                {mockRisks.map((risk) => (
                  <RiskCard key={risk.id} risk={risk} />
                ))}
              </div>
            </DashboardSection>

            <DashboardSection
              title="Action Recommendations"
              description="Suggested next moves based on risk level, timing pressure, and stakeholder context."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                {mockActions.map((action) => (
                  <ActionCard key={action.id} action={action} />
                ))}
              </div>
            </DashboardSection>
          </div>

          <CalendarPreview events={mockCalendar} />
        </div>
      </div>
    </>
  );
}
