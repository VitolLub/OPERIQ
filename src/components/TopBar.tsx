import { Bell, Search } from "lucide-react";

type TopBarProps = {
  title: string;
  description: string;
};

export function TopBar({ title, description }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-field-200 bg-white/92 px-4 py-4 backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-signal-blue">
            Daily Operational Briefing
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-ink-950">{title}</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-ink-600">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden h-10 min-w-72 items-center gap-2 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-600 md:flex">
            <Search size={16} aria-hidden="true" />
            <span>Search operational signals</span>
          </div>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md border border-field-200 bg-white text-ink-600 hover:bg-field-50"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
