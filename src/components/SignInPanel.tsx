import { BarChart3 } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLocale, getTranslations } from "@/lib/locale";

export async function SignInPanel() {
  const locale = await getLocale();
  const t = await getTranslations();

  async function signInWithGoogle() {
    "use server";

    const cookieStore = await cookies();
    cookieStore.set("operiq_demo_session", "1", {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });

    redirect("/dashboard");
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
            <p className="text-xs text-ink-600">{t.auth.eyebrow}</p>
          </div>
          <div className="ml-auto">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <h1 className="mt-8 text-2xl font-semibold leading-tight text-ink-950">
          {t.auth.headline}
        </h1>
        <p className="mt-3 text-sm leading-6 text-ink-600">
          {t.auth.body}
        </p>

        <form action={signInWithGoogle} className="mt-6">
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center rounded-md bg-ink-950 px-4 text-sm font-semibold text-white hover:bg-ink-800"
          >
            {t.auth.googleButton}
          </button>
        </form>
      </section>
    </main>
  );
}
