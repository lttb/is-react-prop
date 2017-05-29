import createDomElem from './createDomElem'
import isCustomProp from '../isCustomProp'
import reactProps from './reactProps'

export default (elem: string | Object, attr: string) => {
  if (reactProps[attr]) return true

  const domElem = typeof elem === 'string' ? createDomElem(elem) : elem

  if (attr in domElem) return true

  const a = attr.toLowerCase()

  if (a in domElem) return true

  if (isCustomProp(a)) return true

  const e = attr.split('Capture')[0]
  if (e.toLowerCase() in domElem || e in reactProps) return true

  return false
}
