import { BellRing, SlidersHorizontal, UserRoundCog } from "lucide-react";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { getTranslations } from "@/lib/locale";

const settings = [
  {
    title: "Briefing Preferences",
    description: "Control how mock briefing sections are prioritized in the interface.",
    icon: SlidersHorizontal,
  },
  {
    title: "Signal Thresholds",
    description: "Preview how risk severity and confidence would be displayed.",
    icon: BellRing,
  },
  {
    title: "Workspace Context",
    description: "Represent future business context without adding authentication.",
    icon: UserRoundCog,
  },
];

export default async function SettingsPage() {
  const t = await getTranslations();

  return (
    <>
      <TopBar
        title={t.commonPages.settingsTitle}
        description={t.commonPages.settingsDescription}
      />
      <div className="px-4 py-6 md:px-6">
        <DashboardSection title="Product Configuration">
          <div className="grid gap-4 lg:grid-cols-3">
            {settings.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                  <div className="flex size-10 items-center justify-center rounded-md bg-field-100 text-ink-800">
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-ink-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
