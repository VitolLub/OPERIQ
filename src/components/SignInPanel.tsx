import { BarChart3 } from "lucide-react";
import { signIn } from "@/auth";

export function SignInPanel() {
  async function signInWithGoogle() {
    "use server";

    await signIn("google", { redirectTo: "/dashboard" });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-field-50 px-4">
      <section className="w-full max-w-md rounded-lg border border-field-200 bg-white p-6 shadow-panel">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-lg bg-ink-950 text-white">
            <BarChart3 size={21} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-950">Operiq</p>
            <p className="text-xs text-ink-600">Operational Intelligence</p>
          </div>
        </div>

        <h1 className="mt-8 text-2xl font-semibold leading-tight text-ink-950">
          Sign in to your operating briefing.
        </h1>
        <p className="mt-3 text-sm leading-6 text-ink-600">
          Use Google to access project signals, daily risks, and executive operating context.
        </p>

        <form action={signInWithGoogle} className="mt-6">
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center rounded-md bg-ink-950 px-4 text-sm font-semibold text-white hover:bg-ink-800"
          >
            Continue with Google
          </button>
        </form>
      </section>
    </main>
  );
}
