# React Native Pseudo Localization

## [Pseudolocalization](https://en.wikipedia.org/wiki/Pseudolocalization)

Pseudolocalization (or pseudo-localization) is a software testing method used for testing internationalization aspects of software. Instead of translating the text of the software into a foreign language, as in the process of localization, the textual elements of an application are replaced with an altered version of the original language.

| English  | Pseudo Language |
| ------------- | ------------- |
| <img width="300" height="550" alt="English" src="https://i.imgur.com/8dDJjtG.jpg"> | <img width="300" height="550" alt="Pseudo Language" src="https://i.imgur.com/PMVvpDq.jpg"> |

## Inspiration

Inspired by [Brian Holt](https://twitter.com/holtbt) talk on [ReactRally](https://www.youtube.com/watch?v=V55BaKDQpMk) and [tryggvigy GitHub repository]( https://github.com/tryggvigy/pseudo-localization).

## Why?

To catch localization problems like:

- Translated text that is significantly longer than the source language, and does not fit within the UI constraints, or which causes text breaks at awkward positions.
- Font glyphs that are significantly larger than, or possess diacritic marks not found in, the source language, and which may be cut off vertically.
- Application code that assumes all characters fit into a limited character set, such as ASCII or ANSI, which can produce actual logic bugs if left uncaught.


## Snack Example

Live example on [Snack](https://snack.expo.io/rkMjSe_L7)

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

## TODO

- React Context API failback for older versions
- Bidi english pseudo strategy

## Articles

[Pseudo Localization @ Netflix](https://medium.com/netflix-techblog/pseudo-localization-netflix-12fff76fbcbe)

## License

MIT License. © Željko Marković 2018