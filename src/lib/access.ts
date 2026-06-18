import { cookies } from "next/headers";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const demoEmail = "demo@operiq.local";

export async function hasAppAccess() {
  const session = await auth();

  if (session?.user) {
    return true;
  }

  const cookieStore = await cookies();
  return cookieStore.get("operiq_demo_session")?.value === "1";
}

export async function getCurrentOperator() {
  const session = await auth();

  if (session?.user?.id) {
    return {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      isDemo: false,
    };
  }

  const cookieStore = await cookies();

  if (cookieStore.get("operiq_demo_session")?.value !== "1") {
    return null;
  }

  const user = await prisma.user.upsert({
    where: {
      email: demoEmail,
    },
    update: {},
    create: {
      email: demoEmail,
      name: "Demo Operator",
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isDemo: true,
  };
}
