import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Plus, Radar } from "lucide-react";
import { auth } from "@/auth";
import { DashboardSection } from "@/components/DashboardSection";
import { TopBar } from "@/components/TopBar";
import { prisma } from "@/lib/prisma";

const signalStyles: Record<string, string> = {
  stable: "bg-emerald-50 text-signal-green",
  watch: "bg-amber-50 text-signal-amber",
  "at-risk": "bg-red-50 text-signal-red",
  critical: "bg-red-50 text-signal-red",
};

async function createProject(formData: FormData) {
  "use server";

  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const businessOwner = String(formData.get("businessOwner") ?? "").trim();
  const signal = String(formData.get("signal") ?? "watch").trim();
  const reviewCadence = String(formData.get("reviewCadence") ?? "weekly").trim();
  const nextReview = String(formData.get("nextReview") ?? "").trim();
  const keyDecision = String(formData.get("keyDecision") ?? "").trim();
  const riskHypothesis = String(formData.get("riskHypothesis") ?? "").trim();
  const successCondition = String(formData.get("successCondition") ?? "").trim();

  if (!name || !description) {
    return;
  }

  await prisma.project.create({
    data: {
      name,
      description,
      businessOwner: businessOwner || null,
      signal: signal || "watch",
      reviewCadence: reviewCadence || "weekly",
      nextReview: nextReview || "This week",
      keyDecision: keyDecision || null,
      riskHypothesis: riskHypothesis || null,
      successCondition: successCondition || null,
      executiveSummary: description,
      ownerId: session.user.id,
    },
  });

  revalidatePath("/projects");
}

export default async function ProjectsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const projects = await prisma.project.findMany({
    where: {
      ownerId: session.user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <>
      <TopBar
        title="Project Signals"
        description="Create and monitor initiatives as operating signals for executive attention and decision support."
      />
      <div className="space-y-8 px-4 py-6 md:px-6">
        <DashboardSection
          title="Create Project"
          description="Capture the operating context Operiq should monitor and elevate in future briefings."
        >
          <form
            action={createProject}
            className="space-y-5 rounded-lg border border-field-200 bg-white p-4 shadow-panel"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr_14rem]">
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Project name</span>
                <input
                  name="name"
                  required
                  placeholder="Enterprise renewal cycle"
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Operating context</span>
                <input
                  name="description"
                  required
                  placeholder="Pricing, approvals, and stakeholder expectations are converging."
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Business owner</span>
                <input
                  name="businessOwner"
                  placeholder="Commercial lead"
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Current signal</span>
                <select
                  name="signal"
                  defaultValue="watch"
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                >
                  <option value="stable">Stable</option>
                  <option value="watch">Watch</option>
                  <option value="at-risk">At risk</option>
                  <option value="critical">Critical</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Review cadence</span>
                <select
                  name="reviewCadence"
                  defaultValue="weekly"
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="critical-only">Critical only</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Next review date</span>
                <input
                  name="nextReview"
                  type="date"
                  className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Key decision needed</span>
                <textarea
                  name="keyDecision"
                  rows={3}
                  placeholder="Confirm pricing guardrails before the renewal review."
                  className="resize-none rounded-md border border-field-200 bg-field-50 px-3 py-2 text-sm leading-6 text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Risk hypothesis</span>
                <textarea
                  name="riskHypothesis"
                  rows={3}
                  placeholder="Approval delays may compress the negotiation window."
                  className="resize-none rounded-md border border-field-200 bg-field-50 px-3 py-2 text-sm leading-6 text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase text-ink-600">Success condition</span>
                <textarea
                  name="successCondition"
                  rows={3}
                  placeholder="Executive owner confirms decision path and next review window."
                  className="resize-none rounded-md border border-field-200 bg-field-50 px-3 py-2 text-sm leading-6 text-ink-950 outline-none focus:border-signal-blue"
                />
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink-950 px-4 text-sm font-semibold text-white hover:bg-ink-800 sm:w-auto"
              >
                <Plus size={16} aria-hidden="true" />
                Create
              </button>
            </div>
          </form>
        </DashboardSection>

        <DashboardSection
          title="Active Intelligence"
          description="Projects are shown as operating signals with owner, cadence, decision, and risk context."
        >
          {projects.length > 0 ? (
            <div className="grid gap-4 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.id} className="rounded-lg border border-field-200 bg-white p-4 shadow-panel">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-semibold capitalize ${
                        signalStyles[project.signal] ?? signalStyles.watch
                      }`}
                    >
                      {project.signal}
                    </span>
                    <span className="text-xs text-ink-600">
                      {project.reviewCadence.replace("-", " ")}
                    </span>
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-ink-950">{project.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-600">
                    {project.executiveSummary ?? "Awaiting operating context."}
                  </p>
                  <dl className="mt-4 grid gap-3 border-t border-field-200 pt-3 text-xs leading-5">
                    <div className="grid grid-cols-[7.5rem_1fr] gap-3">
                      <dt className="font-semibold text-ink-950">Owner</dt>
                      <dd className="text-ink-600">{project.businessOwner ?? "Unassigned"}</dd>
                    </div>
                    <div className="grid grid-cols-[7.5rem_1fr] gap-3">
                      <dt className="font-semibold text-ink-950">Next review</dt>
                      <dd className="text-ink-600">{project.nextReview ?? "This week"}</dd>
                    </div>
                    {project.keyDecision ? (
                      <div>
                        <dt className="font-semibold text-ink-950">Decision</dt>
                        <dd className="mt-1 text-ink-600">{project.keyDecision}</dd>
                      </div>
                    ) : null}
                    {project.riskHypothesis ? (
                      <div>
                        <dt className="font-semibold text-ink-950">Risk hypothesis</dt>
                        <dd className="mt-1 text-ink-600">{project.riskHypothesis}</dd>
                      </div>
                    ) : null}
                    {project.successCondition ? (
                      <div>
                        <dt className="font-semibold text-ink-950">Success condition</dt>
                        <dd className="mt-1 text-ink-600">{project.successCondition}</dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-field-200 bg-white p-8 text-center shadow-panel">
              <div className="mx-auto flex size-11 items-center justify-center rounded-md bg-field-100 text-ink-800">
                <Radar size={20} aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-ink-950">No project signals yet</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-600">
                Create the first project to start building an operating view around risks, reviews, and decisions.
              </p>
            </div>
          )}
        </DashboardSection>
      </div>
    </>
  );
}
