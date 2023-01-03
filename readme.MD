# stylis-prefixer

- custom prefixer for Emotion

## Prefixer

- `mask-composite` for webkit

## Installation

```cmd
$ npm i stylis-prefixer
```

## Usage

```js
import { CacheProvider } from "@emotion/react";
import prefixer from "stylis-prefixer";

export const prefixCache = createCache({
  key: "prefix",
  stylisPlugins: [prefixer],
});

function App() {
  return (
    <div className="App">
      <CacheProvider value={prefixCache}>
        <div>...children</div>
      </CacheProvider>
    </div>
  );
}
```
