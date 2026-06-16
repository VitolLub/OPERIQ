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
};

async function createProject(formData: FormData) {
  "use server";

  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const nextReview = String(formData.get("nextReview") ?? "").trim();

  if (!name) {
    return;
  }

  await prisma.project.create({
    data: {
      name,
      description: description || null,
      executiveSummary:
        description || "New project signal created and awaiting operating context.",
      nextReview: nextReview || "This week",
      signal: "watch",
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
          description="Capture the operating context only. Deeper risk detection can be layered in later."
        >
          <form
            action={createProject}
            className="grid gap-4 rounded-lg border border-field-200 bg-white p-4 shadow-panel lg:grid-cols-[1fr_1.4fr_12rem_auto]"
          >
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase text-ink-600">Name</span>
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
                placeholder="Pricing, approvals, and stakeholder expectations are converging."
                className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase text-ink-600">Next review</span>
              <input
                name="nextReview"
                placeholder="Friday"
                className="h-10 rounded-md border border-field-200 bg-field-50 px-3 text-sm text-ink-950 outline-none focus:border-signal-blue"
              />
            </label>
            <div className="flex items-end">
              <button
                type="submit"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink-950 px-4 text-sm font-semibold text-white hover:bg-ink-800 lg:w-auto"
              >
                <Plus size={16} aria-hidden="true" />
                Create
              </button>
            </div>
          </form>
        </DashboardSection>

        <DashboardSection
          title="Active Intelligence"
          description="Projects are shown as operating signals, not task boards."
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
                    <span className="text-xs text-ink-600">{project.nextReview ?? "This week"}</span>
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-ink-950">{project.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-600">
                    {project.executiveSummary ?? "Awaiting operating context."}
                  </p>
                  {project.description ? (
                    <p className="mt-4 border-t border-field-200 pt-3 text-xs leading-5 text-ink-600">
                      {project.description}
                    </p>
                  ) : null}
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
