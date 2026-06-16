import { LogOut } from "lucide-react";
import { signOut } from "@/auth";

export function SignOutButton() {
  async function handleSignOut() {
    "use server";

    await signOut({ redirectTo: "/" });
  }

  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="flex size-10 items-center justify-center rounded-md border border-field-200 bg-white text-ink-600 hover:bg-field-50"
        aria-label="Sign out"
        title="Sign out"
      >
        <LogOut size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
