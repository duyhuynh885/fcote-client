import React from 'react'
// import Ide from "../../library/ui/js/ide";
// import Ace from "../../library/ui/js/lib/ace";
// import ThemeMonokai from "../../library/ui/js/lib/theme-monokai";
export default function CreateIDE() {
  return (
    <div>
      <h1>Hello</h1>
      <div
        className='editor'
        id='editor'
        style={{ width: '600px', backgroundColor: 'black' }}
      ></div>
    </div>
  )
}
