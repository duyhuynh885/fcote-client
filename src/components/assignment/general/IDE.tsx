import React from 'react'
import Editor from '@monaco-editor/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import _ from 'lodash'

/**
 * Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 08-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 08-06-2022      HuyNT2711           Create
 */

interface IDEProps {
  sourceCode?: string
  onChange: (sourceCode: string) => void
  language?: number
}

function IDE(props: IDEProps) {
  const { language, sourceCode, onChange } = props

  const languageState = useSelector((state: RootState) => state.language.languages)
  const options = {
    width: 'auto',
    flexGrow: 1,
    fontSize: 14,
  }

  function handleSetUser(value: any) {
    onChange(value)
  }

  const mapLanguageById = (languageId: number | undefined) => {
    if (languageState && languageId) {
      const indexResult = _.findIndex(languageState, function (e) {
        return e.id === languageId
      })
      return languageState[indexResult].title.toLowerCase()
    }
    return 'python'
  }

  return (
    <Editor
      options={options}
      width='100%'
      theme='vs-light'
      language={mapLanguageById(language)}
      defaultValue={sourceCode}
      onChange={handleSetUser}
    />
  )
}

export default IDE
