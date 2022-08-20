import moment from 'moment'

export const DD_MM_YYYY_FORMAT = 'DD-MM-YYYY'
export const DD_MM_YYYY_FORMAT_TYPE2 = 'DD/MM/YYYY HH:mm'

export const DD_MM_YYYY_HH_MM_SS_FORMAT = 'DD-MM-YYYY HH:mm:ss'

export const formatDate = (dateTime: string) => {
  return moment(dateTime).format(DD_MM_YYYY_FORMAT)
}

export const formatDateType2 = (dateTime: string) => {
  return moment(dateTime).format(DD_MM_YYYY_FORMAT_TYPE2)
}

export const getCurrentDateTime = () => {
  return moment().toDate()
}

export const getPreviousDate = () => {
  return moment().subtract(1, 'days').toDate()
}
