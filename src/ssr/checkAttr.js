import reactProps from './reactProps'
import isCustomProp from '../isCustomProp'
import attrs from './htmlAttributes'

export default (elem: string | Set<string>, prop: string) =>
  reactProps.has(prop)
    || attrs['*'].has(prop)
    || (typeof elem === 'string' ? attrs[elem].has(prop) : elem.has(prop))
    || isCustomProp(prop.toLowerCase())
