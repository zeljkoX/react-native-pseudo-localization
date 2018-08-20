# React Native Pseudo Localization

## React Native Pseudo Localization is small package that enables [pseudolocalization](https://en.wikipedia.org/wiki/Pseudolocalization) in React Native.

| English  | Pseudo Language |
| ------------- | ------------- |
| <img width="300" height="550" alt="English" src="https://i.imgur.com/8dDJjtG.jpg">
| <img width="300" height="550" alt="Pseudo Language" src="https://i.imgur.com/PMVvpDq.jpg"> |

## Inspiration

Inspired by [Brian Holt](https://twitter.com/holtbt) talk on [ReactRally](https://www.youtube.com/watch?v=V55BaKDQpMk) and [tryggvigy GitHub repository]( https://github.com/tryggvigy/pseudo-localization).

## Installation

```bash
yarn add react-native-pseudo-localization
```

or

```bash
npm install --save react-native-pseudo-localization
```

## Quick Start

```javascript

import {Text} from 'react-native'
import PseudoProvider from 'react-native-pseudo-localization'

export default class App extends Component {

  render() {
    return (
      <PseudoProvider>
        <Text>Test</Text>
      </PseudoProvider>
    )
  }
}
```

## Props

key | type | Value | Description
------ | ---- | ------- | ----------------------
enabled | boolean | true | Programaticaly enabla and disable pseudo localizations

## License

MIT License. © Željko Marković 2018