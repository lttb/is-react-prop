import domElements from '../domElements'
import validAttrTests from '../validAttrTests'
import { validAttr, createDomElem } from '../../'

// thanks to styled-components for these tests

describe('validAttr', () => {
  domElements.forEach(createDomElem)
  validAttrTests(validAttr)
})
