import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import useStyles from './style'

interface SwapLanguageCodeProps {
  language: number
  onChange: (language: number) => void
}
export default function SwapLanguageCode(props: SwapLanguageCodeProps) {
  const { language, onChange } = props
  const classes = useStyles()
  const languagesState = useSelector((state: RootState) => state.language.languages)
  const handleChange = (event: SelectChangeEvent) => {
    onChange(+event.target.value)
  }

  return (
    <FormControl sx={{ m: 0.5, minWidth: 80 }} size='small'>
      <Select
        color='success'
        labelId='select-language-code'
        id='select-language-code'
        className={classes.textLanguageCode}
        value={language.toString()}
        onChange={handleChange}
      >
        {languagesState.map((_language) => (
          <MenuItem
            classes={{ selected: classes.selected }}
            key={_language.id}
            className={classes.textLanguageCode}
            value={_language.id}
          >
            {_language.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
