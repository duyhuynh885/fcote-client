export type RegularButtonType = {
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'transparent'
  size: 'sm' | 'lg'
  round: boolean
  children: any
  fullWidth: boolean
  disabled: boolean
  simple: boolean
  block: boolean
  link: boolean
  justIcon: boolean
  className: string
  [x: string]: any
}
