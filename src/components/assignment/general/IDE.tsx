import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import Axios from 'axios'

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

function IDE() {
  const [userCode, setUserCode] = useState('')
  const [userLang, setUserLang] = useState('python')
  const [userTheme, setUserTheme] = useState('vs-light')
  const [fontSize, setFontSize] = useState(14)
  const [userInput, setUserInput] = useState('')
  const [userOutput, setUserOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const options = {
    width: 'auto',
    flexGrow: 1,
    fontSize: fontSize,
  }
  function handleSetUser(value: any) {
    setUserCode(value)
  }

  function compile() {
    setLoading(true)
    if (userCode === '') {
      return
    }

    // Post request to compile endpoint
    Axios.post('http://localhost:8000/compile', {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.output)
      })
      .then(() => {
        setLoading(false)
      })
  }

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput('')
  }

  return (
    <Editor
      options={options}
      height='calc(50vh - 50px)'
      width='100%'
      theme={userTheme}
      language={userLang}
      defaultLanguage='python'
      defaultValue='# Enter your code here'
      onChange={handleSetUser}
    />
  )
}

export default IDE
