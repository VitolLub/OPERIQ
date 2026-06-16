import type { Metadata } from "next";
import "./globals.css";
import { auth } from "@/auth";
import { Sidebar } from "@/components/Sidebar";
import { SignInPanel } from "@/components/SignInPanel";

export const metadata: Metadata = {
  title: "Operiq",
  description: "Operational Intelligence Platform for daily briefing and risk detection.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        {session?.user ? (
          <div className="flex min-h-screen bg-field-50">
            <Sidebar />
            <main className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</main>
          </div>
        ) : (
          <SignInPanel />
        )}
      </body>
    </html>
  );
}
