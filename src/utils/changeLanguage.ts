import { useTranslation } from 'react-i18next'
const { i18n } = useTranslation()

export const changeLanguage = (textVi: string, textEn: string) => {
  const { language } = i18n
  if (language === 'en') {
    return textEn
  } else {
    return textVi
  }
}
