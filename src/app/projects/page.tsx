import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { mockProjects } from "@/lib/mock-projects";
import type { ProjectSignal } from "@/types/domain";

const signalStyles: Record<ProjectSignal, string> = {
  stable: "bg-emerald-50 text-signal-green",
  watch: "bg-amber-50 text-signal-amber",
  "at-risk": "bg-red-50 text-signal-red",
};

export default function ProjectsPage() {
  return (
    <>
      <TopBar
        title="Project Signals"
        description="Operational pulses for initiatives that may require executive attention or decision support."
      />
      <div className="px-4 py-6 md:px-6">
        <DashboardSection title="Active Intelligence" description="Status is expressed as operational signal, not task progress.">
          <div className="grid gap-4 xl:grid-cols-3">
            {mockProjects.map((project) => (
              <article key={project.id} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-md px-2 py-1 text-xs font-semibold capitalize ${signalStyles[project.signal]}`}>
                    {project.signal}
                  </span>
                  <span className="text-xs text-ink-600">{project.riskCount} risks</span>
                </div>
                <h2 className="mt-4 text-base font-semibold text-ink-950">{project.name}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-600">{project.executiveSummary}</p>
                <p className="mt-4 border-t border-field-200 pt-3 text-xs text-ink-600">
                  Next briefing review: <span className="font-medium text-ink-950">{project.nextReview}</span>
                </p>
              </article>
            ))}
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
