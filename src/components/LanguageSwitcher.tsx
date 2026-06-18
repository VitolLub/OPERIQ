"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();

  function setLocale(nextLocale: Locale) {
    document.cookie = `operiq_locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <div className="flex h-10 items-center rounded-md border border-field-200 bg-white p-1 text-xs font-semibold text-ink-600">
      {(["en", "de"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`h-8 rounded px-2 uppercase ${
            locale === item ? "bg-field-100 text-ink-950" : "hover:bg-field-50"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
