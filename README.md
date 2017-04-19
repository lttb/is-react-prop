# Is React Prop?

## Usage

```js
import isReactProp from 'is-react-prop'

console.log(isReactProp('data-name')) // true
console.log(isReactProp('onClick')) // true
console.log(isReactProp('unknownProp')) // false
```

## How it works?

This modules uses `DOMProperty` and `EventPluginRegistry` from `react-dom`.

It's important to note, that both modules act like singleton. They have their own mutable state, where React inject values like available events and DOM element properties.

So this package just take them as is and get the same values as React for props checking from them.
