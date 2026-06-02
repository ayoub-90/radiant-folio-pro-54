import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { fr } from "./translations-fr";

export type Lang = "en" | "fr";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (stored === "en" || stored === "fr") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);

  const t = useCallback(
    (en: string) => {
      if (lang === "en") return en;
      return fr[en] ?? en;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}
