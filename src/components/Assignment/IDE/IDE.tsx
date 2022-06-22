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

  const [userTheme, setUserTheme] = useState('vs-dark')

  const [fontSize, setFontSize] = useState(20)

  const [userInput, setUserInput] = useState('')

  const [userOutput, setUserOutput] = useState('')

  const [loading, setLoading] = useState(false)

  const options = {
    fontSize: fontSize,
  }
  // function handleSetUser(value: string):void{
  //   console.log('Value', value)
  //  setUserCode(value)
  // }
const handleSetUser = (value:string):void=>{
     console.log('Value', value)
     return setUserCode(value)
}
  function compile() {
    setLoading(true)
    if (userCode === '') {
      return
    }



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
