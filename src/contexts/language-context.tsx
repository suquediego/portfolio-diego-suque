"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "pt" | "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE: Language = "en";
const availableLanguages: Language[] = ["pt", "en", "es"];

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function isLanguage(value: string | null): value is Language {
  return availableLanguages.includes(value as Language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      let storedLanguage: string | null = null;

      try {
        storedLanguage = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        storedLanguage = null;
      }

      if (isLanguage(storedLanguage)) {
        setLanguageState(storedLanguage);
      }
    }, 0);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Keep the language change even if storage is unavailable.
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
