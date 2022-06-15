import {} from '@mui/material'
import {} from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const MyListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: `${theme.color.backgroundColor} !important`,
    width: '100% !important',
    // margin: "auto",
  },
  containerGrid: {
    width: '1007px !important',
    height: 'auto !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    marginTop: `${theme.spacing(2)} !important`,
  },
  itemGrid: {
    // position: "absolute",
    width: '223px',
    height: '178px',
    marginTop: `${theme.spacing(4)} !important`,
  },
}))

export default MyListAssignmentStyle
