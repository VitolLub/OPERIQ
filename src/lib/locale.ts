import { cookies } from "next/headers";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get("operiq_locale")?.value;

  return isLocale(value) ? value : "en";
}

export async function getTranslations() {
  return getDictionary(await getLocale());
}
