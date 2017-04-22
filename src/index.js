import DOMProperty from 'react-dom/lib/DOMProperty'
import EventPluginRegistry from 'react-dom/lib/EventPluginRegistry'


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
}

const hasProp = Object.prototype.hasOwnProperty

export default (prop: string) => {
  if (
    hasProp.call(DOMProperty.properties, prop)
    || DOMProperty.isCustomAttribute(prop.toLowerCase())
  ) {
    return true
  }
  if (hasProp.call(reactProps, prop) && reactProps[prop]) {
    return true
  }
  if (
    hasProp.call(EventPluginRegistry.registrationNameModules, prop)
    || hasProp.call(EventPluginRegistry.registrationNameModules, prop.split('Capture')[0])
  ) {
    return true
  }

  return false
}
