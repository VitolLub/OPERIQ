import { FileCheck2, FileWarning, ShieldCheck } from "lucide-react";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";

const documents = [
  {
    title: "Renewal decision brief",
    state: "Missing finance appendix",
    icon: FileWarning,
    tone: "text-signal-amber bg-amber-50",
  },
  {
    title: "Board package summary",
    state: "Ready for leadership review",
    icon: FileCheck2,
    tone: "text-signal-green bg-emerald-50",
  },
  {
    title: "Escalation response note",
    state: "Needs sponsor alignment",
    icon: ShieldCheck,
    tone: "text-signal-blue bg-blue-50",
  },
];

export default function DocumentsPage() {
  return (
    <>
      <TopBar
        title="Document Signals"
        description="Readiness indicators for briefing materials, decision notes, and operational context documents."
      />
      <div className="px-4 py-6 md:px-6">
        <DashboardSection title="Briefing Material Readiness">
          <div className="grid gap-4 lg:grid-cols-3">
            {documents.map((document) => {
              const Icon = document.icon;

              return (
                <article key={document.title} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                  <div className={`flex size-10 items-center justify-center rounded-md ${document.tone}`}>
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-ink-950">{document.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{document.state}</p>
                </article>
              );
            })}
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
