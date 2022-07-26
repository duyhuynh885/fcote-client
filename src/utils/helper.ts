import { getCookie } from './auth'

export const generateFunctionTemplate = () => {
  return false
}

export const swapMessage = (messageEn: string, messageVi: string) => {
  return getCookie('i18next') === 'en' ? messageEn : messageVi
}
