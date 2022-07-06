import { AxiosError } from 'axios'
export const handleError = (error: any) => {
  const err = error as AxiosError
  return err.response
}
