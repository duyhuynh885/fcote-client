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
  // State variable to set users source code
  const [userCode, setUserCode] = useState('')

  // State variable to set editors default language
  const [userLang, setUserLang] = useState('python')

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState('vs-dark')

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20)

  // State variable to set users input
  const [userInput, setUserInput] = useState('')

  // State variable to set users output
  const [userOutput, setUserOutput] = useState('')

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false)

  const options = {
    fontSize: fontSize,
  }
  function handleSetUser(value: any) {
    setUserCode(value)
    console.log('Value', value)
  }
  // Function to call the compile endpoint
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
    <div className='App'>
      <div className='main'>
        <div className='left-container'>
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
        </div>
      </div>
    </div>
  )
}

export default IDE

{
  /* <button className="run-btn" onClick={() => compile()}>
Run
</button> */
}
