import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  challengeCardBanner: {
    width: '30vh',
    height: '30vh',
  },
  container: {
    width: '90%',
    height: '30vh',
    margin: '0 auto',
    marginTop: '30px',
  },
  bannerTitle: {
    fontSize: theme.textFont.extraLarge,
    fontWeight: '700',
    textAlign: 'center',
  },
  bannerDescription: {
    fontSize: theme.textFont.small,
    fontWeight: '500',
    textAlign: 'center',
  },
  bannerTextTitle: {
    fontWeight: '700',
    minWidth: 170,
    fontSize: theme.textFont.small,
  },
  bannerTextDescription: {
    fontWeight: '700',
    minWidth: 170,
    color: theme.color.darkGray,
    fontSize: theme.textFont.extraSmall,
  },
  bannerFooterTextTitle: {
    fontWeight: '800',
    fontSize: theme.textFont.small,
  },
  bannerFooterTotalParticipial: {
    fontWeight: '800',
    color: theme.color.darkRed,
    fontSize: theme.textFont.medium,
  },
  bannerTextStartDate: {
    fontWeight: '700',
    color: theme.color.green,

    fontSize: theme.textFont.extraSmall,
  },
  bannerTextEndDate: {
    fontWeight: '700',
    color: theme.color.red,

    fontSize: theme.textFont.extraSmall,
  },
  bannerTextDate: {
    fontWeight: '600',
    color: theme.color.darkGray,
    fontSize: theme.textFont.extraSmall,
  },
}))

export default useStyles
