import * as whitelists from '../whitelists'

const reactProps = Object
  .values(whitelists)
  .reduce((acc, val) => ({...acc, ...val}), {})

const NS = [
  'http://www.w3.org/1999/xhtml',
  'http://www.w3.org/2000/svg',
]

let doc = document

export const init = (d = document) => {
  doc = d
}

const elements = {}

export const createDomElem = (name: string): HTMLElement | HTMLUnknownElement => {
  if (name in elements) return elements[name]

  let domElem = HTMLUnknownElement
  for (let i = 0; i < NS.length; i += 1) {
    domElem = doc.createElementNS(NS[i], name)
    if (!(domElem instanceof HTMLUnknownElement)) {
      elements[name] = domElem

      return domElem
    }
  }

  return domElem
}

const checkAttr = (elem: string, attr: string) => {
  if (reactProps[attr]) {
    return true
  }

  const domElem = createDomElem(elem)

  if (attr in domElem) return true

  const a = attr.toLowerCase()

  if (a in domElem) return true
  if (a.startsWith('data-')) return true
  if (a.startsWith('aria-')) return true

  const e = attr.split('Capture')[0]
  if (e.toLowerCase() in domElem || e in reactProps) return true

  return false
}

export const validAttr = (attr: string) => {
  const res = Object.keys(elements).some((name: string) => checkAttr(name, attr))

  return res
}

export default checkAttr
