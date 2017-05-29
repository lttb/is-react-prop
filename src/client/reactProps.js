import * as whitelists from '../whitelists'

const reactProps = {}

/* eslint-disable guard-for-in, no-restricted-syntax */
for (const key in whitelists) Object.assign(reactProps, whitelists[key])

export default reactProps
