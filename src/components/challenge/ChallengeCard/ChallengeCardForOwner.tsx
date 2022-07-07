import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link } from 'react-router-dom'

/**
 * ChallengeCardForOwner
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */

interface IProps {
  url: string
}

export default function ChallengeCardForOwner(props: IProps) {
  const classes = useStyles()
  return (
    <Paper
      elevation={4}
      square
      sx={{
        width: '100%',
        height: '125px',
      }}
    >
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.url}>
        <Stack direction='row'>
          <img
            className={classes.challengeCardBanner}
            src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'
          />
          <Stack direction='column' className={classes.challengeCardContainer}>
            <Typography className={classes.challengeCardTittle}>
              FPT TECHDAY 2021_CODE WARS: VÒNG ĐẤU TỰ DO - 03/12/2021
            </Typography>

            <Typography sx={{ marginTop: '18px' }}>
              Bảng thi giành cho mọi đối tượng đam mê lập trình, yêu thích công nghệ Đăng ký tham
              gia vui lòng truy cập: https://techday2021.fpt.com.vn/vi/code-war
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <Stack direction='row'>
                <PersonOutlineIcon />
                <Typography>300 Users</Typography>
              </Stack>
              <Typography>2022-25-02</Typography>
              <Typography className={classes.challengeCardStatus}>Finished</Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
