import * as whitelists from '../whitelists'

const reactProps = {}

let key
/* eslint-disable guard-for-in, no-restricted-syntax */
for (key in whitelists) Object.assign(reactProps, whitelists[key])

export default reactProps
