import { makeStyles } from '@mui/styles'

const ButtonItemStyle = makeStyles((theme: any) => ({
  btn: {
    padding: '14px 32px !important',
    gap: '10px !important',
    width: '204px',
    height: '36px ',
    backgroundColor: ` ${theme.color.green} !important`,
    marginLeft: `4% !important`,
    marginTop: '5px !important',
  },
  textBtn: {
    width: '140px',
    height: '22px',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: '22px !important',
    textTransform: 'capitalize',
    color: '#000000 !important',
  },
}))

export default ButtonItemStyle
