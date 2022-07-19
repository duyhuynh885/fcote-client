import moment from 'moment'

const DD_MM_YYYY_FORMAT = 'DD-MM-YYYY'

export const formatDate = (dateTime: string) => {
  return moment(dateTime).format(DD_MM_YYYY_FORMAT)
}
