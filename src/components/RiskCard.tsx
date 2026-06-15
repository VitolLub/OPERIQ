import { AlertTriangle, Gauge } from "lucide-react";
import type { Risk, RiskLevel } from "@/types/domain";

const riskStyles: Record<RiskLevel, string> = {
  critical: "border-signal-red/40 bg-red-50 text-signal-red",
  high: "border-signal-amber/40 bg-amber-50 text-signal-amber",
  medium: "border-signal-blue/35 bg-blue-50 text-signal-blue",
  low: "border-signal-green/35 bg-emerald-50 text-signal-green",
};

type RiskCardProps = {
  risk: Risk;
};

export function RiskCard({ risk }: RiskCardProps) {
  return (
    <article className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold capitalize ${riskStyles[risk.level]}`}
          >
            <AlertTriangle size={13} aria-hidden="true" />
            {risk.level}
          </span>
          <span className="text-xs text-ink-600">Detected {risk.detectedAt}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-ink-600">
          <Gauge size={14} aria-hidden="true" />
          {risk.confidence}%
        </div>
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-6 text-ink-950">{risk.title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">{risk.impact}</p>
      <div className="mt-4 border-t border-field-200 pt-3 text-xs text-ink-600">
        Source: <span className="font-medium text-ink-800">{risk.source}</span>
      </div>
    </article>
  );
}
