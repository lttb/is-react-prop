import attrs from './htmlAttributes'
import checkAttr from './checkAttr'

const domProps = new Set(Object
  .keys(attrs)
  .reduce((acc, elem: string) => acc.concat(...attrs[elem]), []))

export default (attr: string) => checkAttr(domProps, attr)
