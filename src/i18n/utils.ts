import { ui, defaultLang, languages } from './ui'

export type Lang = keyof typeof ui

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Lang
  return defaultLang
}

/** Normaliza Astro.currentLocale (string | undefined) a un Lang soportado. */
export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

/** Reescribe un path absoluto ("/", "/projects/x") al equivalente en `lang`. */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang) {
    return targetLang === defaultLang ? path : `/${targetLang}${path}`
  }
}

export function getLocalized<T extends Partial<Record<Lang, string>>>(
  value: T,
  lang: Lang
): string {
  return value[lang] ?? value[defaultLang] ?? ''
}

export { languages, defaultLang }
