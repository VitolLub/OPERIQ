import { Bell, Search } from "lucide-react";
import { getCurrentOperator } from "@/lib/access";
import { getLocale, getTranslations } from "@/lib/locale";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SignOutButton } from "@/components/SignOutButton";

type TopBarProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export async function TopBar({ title, description, eyebrow }: TopBarProps) {
  const [operator, locale, t] = await Promise.all([
    getCurrentOperator(),
    getLocale(),
    getTranslations(),
  ]);

  return (
    <header className="sticky top-0 z-20 border-b border-field-200 bg-white/92 px-4 py-4 backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-signal-blue">
            {eyebrow ?? t.dashboard.topbarEyebrow}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-ink-950">{title}</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-ink-600">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden h-10 min-w-72 items-center gap-2 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-600 md:flex">
            <Search size={16} aria-hidden="true" />
            <span>{t.shell.search}</span>
          </div>
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md border border-field-200 bg-white text-ink-600 hover:bg-field-50"
            aria-label={t.shell.notifications}
            title={t.shell.notifications}
          >
            <Bell size={18} aria-hidden="true" />
          </button>
          {operator ? (
            <div className="hidden items-center gap-3 border-l border-field-200 pl-3 md:flex">
              <div className="text-right">
                <p className="text-sm font-medium text-ink-950">{operator.name ?? t.shell.operator}</p>
                <p className="text-xs text-ink-600">{operator.email}</p>
              </div>
              <SignOutButton label={t.shell.signOut} />
            </div>
          ) : null}
          {operator ? <div className="md:hidden"><SignOutButton label={t.shell.signOut} /></div> : null}
        </div>
      </div>
    </header>
  );
}
