import { LogOut } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";

type SignOutButtonProps = {
  label: string;
};

export function SignOutButton({ label }: SignOutButtonProps) {
  async function handleSignOut() {
    "use server";

    const cookieStore = await cookies();
    cookieStore.delete("operiq_demo_session");

    const session = await auth();

    if (!session?.user) {
      redirect("/");
    }

    await signOut({ redirectTo: "/" });
  }

  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="flex size-10 items-center justify-center rounded-md border border-field-200 bg-white text-ink-600 hover:bg-field-50"
        aria-label={label}
        title={label}
      >
        <LogOut size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
