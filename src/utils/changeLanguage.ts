import { useTranslation } from 'react-i18next'
const { i18n } = useTranslation()

/**
 * Swaps the current translation
 * @param textVi string
 * @param textEn string
 * @returns
 */
export const changeLanguage = (textVi: string, textEn: string) => {
  const { language } = i18n
  if (language === 'en') {
    return textEn
  } else {
    return textVi
  }
}
