import { Box, Grid, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import CardItem from '../../../components/about-us/CardItem'
import duyAva from '../../../assets/duy.jpg'

/**
/**
 * AboutUs Pages
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 06-07-2022         TuanLA           Create
 */

const itemData = [
  {
    id: 1,
    name: 'Le Anh Tuan',
    position: 'Software Developer',
    birthday: '07/09/2000',
    avatar: 'https://www.linkpicture.com/q/TuanLA.jpg',
    university: 'FPT University',
    social: {
      facebook: 'https://www.facebook.com/letuan7920/',
      github: 'https://gitlab.com/m4gi',
    },
  },
  {
    id: 2,
    name: 'Nguyen Van Thuan',
    position: 'Software Developer',
    birthday: '12/03/2000',
    avatar: 'https://www.linkpicture.com/q/182980298_103647368574554_8255196538262780374_n.jpg',
    university: 'FPT University',
    social: {
      facebook: 'https://www.facebook.com/thuan895',
      github: 'https://gitlab.com/thuan895',
    },
  },
  {
    id: 3,
    name: 'Nguyen Tan Huy',
    position: 'Software Developer',
    birthday: '27/11/2000',
    avatar: 'https://www.linkpicture.com/q/76931544_789032974891261_8407569228344852480_n.jpg',
    university: 'FPT University',
    social: {
      facebook: 'https://www.facebook.com/tanhuy2711',
      github: 'https://gitlab.com/HuyNT2711',
    },
  },
  {
    id: 4,
    name: 'Huynh Van Duy',
    position: 'Software Developer',
    birthday: '08/05/2000',
    avatar: duyAva,
    university: 'FPT University',
    social: {
      facebook: 'https://www.facebook.com/duyhuynh885',
      github: 'https://gitlab.com/duyhuynh885',
    },
  },
]

export default function AboutUs() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '20vh' }}
      >
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.title}
          >
            WHO WE ARE?
          </Typography>
          
        </Box>
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.contentTitle}
          >
            OUR TEAM
          </Typography>
          <Container fixed disableGutters>
            <Stack direction='row' spacing={2}>
              {itemData.map((item) => (
                <CardItem
                  key={item.id}
                  name={item.name}
                  position={item.position}
                  birthday={item.birthday}
                  avatar={item.avatar}
                  university={item.university}
                  social={item.social}
                />
              ))}
            </Stack>
          </Container>
        </Box>
      </Grid>
    </React.Fragment>
  )
}
