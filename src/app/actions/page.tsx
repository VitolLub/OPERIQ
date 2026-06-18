import { ActionCard } from "@/components/ActionCard";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { mockActions } from "@/lib/mock-actions";
import { getTranslations } from "@/lib/locale";

export default async function ActionsPage() {
  const t = await getTranslations();

  return (
    <>
      <TopBar
        title={t.commonPages.actionsTitle}
        description={t.commonPages.actionsDescription}
      />
      <div className="px-4 py-6 md:px-6">
        <DashboardSection title={t.commonPages.actionsSectionTitle} description={t.commonPages.actionsSectionDescription}>
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
