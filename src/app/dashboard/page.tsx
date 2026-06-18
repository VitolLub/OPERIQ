import { ArrowUpRight, CalendarRange, CheckCircle2, CircleDot, Radar } from "lucide-react";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import {
  calendarWeek,
  dashboardCriticalRisks,
  dashboardTodayActions,
  nextFourWeeks,
  processedInformation,
} from "@/lib/mock-dashboard";
import { getTranslations } from "@/lib/locale";

const horizonStyles: Record<string, string> = {
  critical: "bg-red-50 text-signal-red",
  watch: "bg-amber-50 text-signal-amber",
  stable: "bg-emerald-50 text-signal-green",
};

const priorityStyles: Record<string, string> = {
  urgent: "text-signal-red",
  high: "text-signal-amber",
  normal: "text-signal-blue",
};

export default async function DashboardPage() {
  const t = await getTranslations();
  const primaryRisk = dashboardCriticalRisks[0];
  const supportingRisks = dashboardCriticalRisks.slice(1);
  const primaryAction = dashboardTodayActions[0];
  const remainingActions = dashboardTodayActions.slice(1);

  return (
    <>
      <TopBar
        title={t.dashboard.topbarTitle}
        description={t.dashboard.topbarDescription}
        eyebrow={t.dashboard.topbarEyebrow}
      />

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:px-6">
        <section className="rounded-lg border border-field-200 bg-white p-6 shadow-panel">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase text-signal-blue">{t.dashboard.heroEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink-950">
              {t.dashboard.heroTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink-600">
              {t.dashboard.heroBody}
            </p>
          </div>
        </section>

        <DashboardSection
          title={t.dashboard.criticalRisksTitle}
          description={t.dashboard.criticalRisksDescription}
        >
          <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-lg border border-signal-red/30 bg-white p-5 shadow-panel">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-semibold uppercase text-signal-red">
                  {t.dashboard.primaryRisk}
                </span>
                <span className="text-xs font-medium text-ink-600">
                  {primaryRisk.confidence}% {t.dashboard.confidence}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-ink-950">{primaryRisk.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{primaryRisk.impact}</p>
              <div className="mt-5 rounded-md bg-field-50 p-4">
                <p className="text-xs font-semibold uppercase text-ink-600">{t.dashboard.executiveImplication}</p>
                <p className="mt-2 text-sm leading-6 text-ink-800">
                  {t.dashboard.executiveImplicationBody}
                </p>
              </div>
            </article>

            <div className="space-y-3">
              {supportingRisks.map((risk) => (
                <article key={risk.id} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-1 text-signal-amber" size={15} aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold leading-6 text-ink-950">{risk.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-ink-600">{risk.impact}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </DashboardSection>

        <DashboardSection
          title={t.dashboard.nextFourWeeksTitle}
          description={t.dashboard.nextFourWeeksDescription}
        >
          <div className="grid gap-3 lg:grid-cols-4">
            {nextFourWeeks.map((item) => (
              <article key={item.id} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink-950">{item.window}</span>
                  <span className={`rounded-md px-2 py-1 text-xs font-semibold capitalize ${horizonStyles[item.tone]}`}>
                    {item.tone}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-6 text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{item.move}</p>
              </article>
            ))}
          </div>
        </DashboardSection>

        <section className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <DashboardSection
            title={t.dashboard.calendarWeekTitle}
            description={t.dashboard.calendarWeekDescription}
          >
            <div className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
              <div className="space-y-4">
                {calendarWeek.map((day) => (
                  <div key={day.id} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-field-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink-950">
                      <CalendarRange size={15} className="text-signal-blue" aria-hidden="true" />
                      {day.day}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-950">{day.focus}</p>
                      <p className="mt-1 text-sm leading-6 text-ink-600">{day.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardSection>

          <DashboardSection
            title={t.dashboard.todayTitle}
            description={t.dashboard.todayDescription}
          >
            <div className="rounded-lg border border-field-200 bg-white p-5 shadow-panel">
              <div className="border-b border-field-200 pb-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-xs font-semibold uppercase ${priorityStyles[primaryAction.priority]}`}>
                      {t.dashboard.firstMove}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-7 text-ink-950">{primaryAction.title}</h3>
                  </div>
                  <ArrowUpRight className="shrink-0 text-ink-600" size={18} aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm leading-6 text-ink-600">{primaryAction.reason}</p>
                <p className="mt-4 text-sm font-medium text-ink-950">{primaryAction.suggestedWindow}</p>
              </div>

              <div className="mt-5 space-y-4">
                {remainingActions.map((action) => (
                  <div key={action.id} className="flex gap-3">
                    <CheckCircle2 className={`mt-1 shrink-0 ${priorityStyles[action.priority]}`} size={16} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold leading-6 text-ink-950">{action.title}</p>
                      <p className="text-sm leading-6 text-ink-600">{action.suggestedWindow}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardSection>
        </section>

        <DashboardSection
          title={t.dashboard.processedTitle}
          description={t.dashboard.processedDescription}
        >
          <div className="rounded-lg border border-field-200 bg-white p-5 shadow-panel">
            <div className="grid gap-4 md:grid-cols-4">
              {processedInformation.map((item) => (
                <div key={item.id} className="border-l border-field-200 pl-4 first:border-l-0 first:pl-0">
                  <div className="flex items-center gap-2">
                    <Radar size={14} className="text-signal-blue" aria-hidden="true" />
                    <p className="text-sm font-semibold text-ink-950">{item.value}</p>
                  </div>
                  <p className="mt-1 text-xs font-medium text-ink-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </DashboardSection>
      </div>
    </>
  );
}
