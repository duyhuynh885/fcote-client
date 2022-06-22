import { makeStyles } from '@mui/styles'
/**
 * Client
 * <p>
 * Version 1.0
 * <p>
 * Date: 07-06-20212
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 07-06-20212      HuyNT2711           Create
 *
 */

const ListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: '#F3F7F7',
    width: '100% !important',
    paddingLeft: ' 6rem !important',
  },
  left: {
    float: 'left',
    width: '733px !important',
    height: 'auto',
    marginTop: `${theme.spacing(2)} !important`,
    padding: `${theme.spacing(0)} !important`,
  },

  leftItem: {
    width: '223px !important',
    height: '178px !important',
    marginTop: `${theme.spacing(2)} !important`,
    paddingRight: `${theme.spacing(2)} !important`,
  },
  right: {
    float: 'left',
    width: '543px',
    height: 'auto',
    marginTop: `${theme.spacing(4)} !important`,
    marginLeft: '3.66rem !important',
    paddingBottom: '20px',
  },
  rightItem: {
    marginLeft: theme.spacing(3),
    paddingTop: '28px !important',
  },
  textTitle: {
    width: '543px',
    height: '27px',
    fontWeight: '700 !important',
    fontSize: `${theme.textFont.large} !important`,
    lineHeight: '27px !important',
    textTransform: 'capitalize',
    color: `${theme.color.name} !important`,
    textAlign: 'center',
    paddingTop: '30px !important',
    paddingBottom: '30px !important',
    marginLeft: theme.spacing(3),
  },
}))

export default ListAssignmentStyle
