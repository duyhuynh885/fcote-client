import moment from 'moment'

export const DD_MM_YYYY_FORMAT = 'DD-MM-YYYY'
export const DD_MM_YYYY_HH_MM_SS_FORMAT = 'DD-MM-YYYY HH:mm:ss'

export const formatDate = (dateTime: string) => {
  return moment(dateTime).format(DD_MM_YYYY_FORMAT)
}

export const getCurrentDateTime = () => {
  return moment().toDate()
}
