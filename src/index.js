const reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,

  autoFocus: true,
  defaultValue: true,
  defaultChecked: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,

  // deprecated
  valueLink: true,
  checkedLink: true,

  // react different naming
  allowFullScreen: true,

  // include some
  role: true,
  scoped: true,

  // events
  onDoubleClick: true, // ondblclick

  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  // schema.org
  itemProp: true,
  itemScope:true,
  itemType: true,
  itemID: true,
  itemRef: true,
}

const NS = [
  'http://www.w3.org/1999/xhtml',
  'http://www.w3.org/2000/svg',
]

const elements = {}

let doc = document

export const init = (d = document) => {
  doc = d
}

export const createDomElem = (name: string) => {
  if (name in elements) return elements[name]

  let domElem
  for (let i = 0; i < NS.length; i += 1) {
    domElem = doc.createElementNS(NS[i], name)
    if (!(domElem instanceof HTMLUnknownElement)) {
      elements[name] = domElem

      return domElem
    }
  }

  return domElem
}

const checkAttr = (domElem, attr) => {
  if (reactProps[attr]) {
    return true
  }

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
  const res = Object.keys(elements).some((name: string) => checkAttr(elements[name], attr))

  return res
}

export default (elem: string) => (prop: string) => {
  if (reactProps[prop]) {
    return true
  }

  return checkAttr(createDomElem(elem), prop)
}
