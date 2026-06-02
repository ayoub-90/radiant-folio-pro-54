import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useLang } from "@/lib/i18n";

export function Controls() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLang();

  return (
    <div className="fixed right-4 top-4 z-[120] flex items-center gap-2 md:right-6 md:top-6">
      <div
        className="font-mono flex items-center overflow-hidden rounded-full border text-[10px] uppercase tracking-[0.2em] backdrop-blur"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "color-mix(in oklab, var(--surface) 75%, transparent)",
        }}
        role="group"
        aria-label={t("Switch language")}
      >
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          className={`px-3 py-2 transition-colors ${
            lang === "en" ? "bg-indigo text-white" : "text-foreground/70 hover:text-indigo"
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("fr")}
          aria-pressed={lang === "fr"}
          className={`px-3 py-2 transition-colors ${
            lang === "fr" ? "bg-indigo text-white" : "text-foreground/70 hover:text-indigo"
          }`}
        >
          FR
        </button>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label={theme === "dark" ? t("Light mode") : t("Dark mode")}
        className="flex h-9 w-9 items-center justify-center rounded-full border text-foreground transition-colors hover:border-indigo hover:text-indigo"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "color-mix(in oklab, var(--surface) 75%, transparent)",
        }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
  );
}
