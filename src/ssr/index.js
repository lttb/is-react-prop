import reactProps from './reactProps'
import attrs from './htmlAttributes'

const elements = {}

export const createDomElem = (name: string) => {
  if (!(name in elements)) elements[name] = attrs[name] || attrs['*']

  return elements[name]
}

const checkAttr = (elem: string, prop: string) => {
  if (reactProps.has(prop) || attrs['*'].has(prop) || attrs[elem].has(prop)) return true

  const a = prop.toLowerCase()

  if (a.startsWith('data-')) return true
  if (a.startsWith('aria-')) return true

  return false
}


export const validAttr = (attr: string) => {
  const res = Object.keys(attrs).some((name: string) => checkAttr(name, attr))

  return res
}

export default checkAttr
