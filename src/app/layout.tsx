import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Operiq",
  description: "Operational Intelligence Platform for daily briefing and risk detection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-field-50">
          <Sidebar />
          <main className="min-w-0 flex-1 pb-20 lg:pb-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
