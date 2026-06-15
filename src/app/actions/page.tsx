import { ActionCard } from "@/components/ActionCard";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { mockActions } from "@/lib/mock-actions";

export default function ActionsPage() {
  return (
    <>
      <TopBar
        title="Action Recommendations"
        description="Recommended interventions that reduce risk, clarify ownership, or protect time-sensitive decisions."
      />
      <div className="px-4 py-6 md:px-6">
        <DashboardSection title="Recommended Next Moves" description="Mock recommendations only. No automation or execution layer is connected.">
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {mockActions.map((action) => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
