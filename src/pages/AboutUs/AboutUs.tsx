import { Box, Grid, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Logo } from '../../asset/LogoBrand.svg'
import useStyles from './style'
import CardItem from '../../components/About-Us/CardItem'
import { DataAboutUs } from '../../components/About-Us/type'
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
    avatar: '#',
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
    birthday: '00/00/2000',
    avatar: '#',
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
    avatar: '#',
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
    birthday: '00/00/2000',
    avatar: '#',
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
        <Logo />
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.contenTitle}
          >
            WHO WE ARE?
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            gutterBottom
            align='center'
            mt={2}
            className={classes.subContent}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non fringilla diam. In
            suscipit libero posuere aliquet iaculis. Donec hendrerit accumsan gravida. Pellentesque
            neque elit, lacinia et ullamcorper vitae, tempor fermentum metus. In hac habitasse
            platea dictumst. Aliquam id dictum lorem, vel auctor nisl. Aliquam mattis odio sem, at
            volutpat enim fermentum eu.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            align='center'
            className={classes.contenTitle}
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
