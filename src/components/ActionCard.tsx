import { ArrowRight, Zap } from "lucide-react";
import type { ActionPriority, RecommendedAction } from "@/types/domain";

const priorityStyles: Record<ActionPriority, string> = {
  urgent: "bg-signal-red text-white",
  high: "bg-signal-amber text-white",
  normal: "bg-field-100 text-ink-800",
};

type ActionCardProps = {
  action: RecommendedAction;
};

export function ActionCard({ action }: ActionCardProps) {
  return (
    <article className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold capitalize ${priorityStyles[action.priority]}`}
        >
          <Zap size={13} aria-hidden="true" />
          {action.priority}
        </span>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-md border border-field-200 text-ink-600 hover:bg-field-50"
          aria-label={`Review ${action.title}`}
          title="Review recommendation"
        >
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-6 text-ink-950">{action.title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">{action.reason}</p>
      <dl className="mt-4 grid gap-3 border-t border-field-200 pt-3 text-xs">
        <div>
          <dt className="font-semibold text-ink-950">Context</dt>
          <dd className="mt-1 text-ink-600">{action.ownerContext}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-950">Suggested window</dt>
          <dd className="mt-1 text-ink-600">{action.suggestedWindow}</dd>
        </div>
      </dl>
    </article>
  );
}
