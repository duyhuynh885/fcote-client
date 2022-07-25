import moment from 'moment'

const DD_MM_YYYY_FORMAT = 'DD-MM-YYYY'
const DD_MM_YYYY_HH_MM_SS_FORMAT = 'YYYY/MM/DD HH:mm:ss'

export const formatDate = (dateTime: string) => {
  return moment(dateTime).format(DD_MM_YYYY_FORMAT)
}

export const getDurationDateTime = (endTime: string) => {
  const present = moment()
  return moment
    .duration(
      moment(endTime, DD_MM_YYYY_HH_MM_SS_FORMAT).diff(moment(present, DD_MM_YYYY_HH_MM_SS_FORMAT)),
    )
    .asHours()
}
