declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '*.png' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '@ckeditor/ckeditor5-react' {
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  import Event from '@ckeditor/ckeditor5-utils/src/eventinfo'
  import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
  import * as React from 'react'
  const CKEditor: React.FunctionComponent<{
    disabled?: boolean
    editor: typeof ClassicEditor
    data?: string
    id?: string
    config?: EditorConfig
    onReady?: (editor: ClassicEditor) => void
    onChange?: (event: Event, editor: ClassicEditor) => void
    onBlur?: (event: Event, editor: ClassicEditor) => void
    onFocus?: (event: Event, editor: ClassicEditor) => void
    onError?: (event: Event, editor: ClassicEditor) => void
  }>
  export { CKEditor }
}
