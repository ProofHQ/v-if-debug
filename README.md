# v-if-debug
Component for overriding conditionals in development environments

## Quickstart

```
npm i -S v-if-debug
```

In `main.js`

```
import DebugIf from 'v-if-debug'

Vue.use(DebugIf, {enable: config.DEBUG_MODE})
```

## Example
Let's say you have a modal component that displays based on some property `showModal` like this:

```
<VueModal v-if="showModal" />
```

To enable the over toggles you would wrap `VueModal` with the `DebugIf` component like this:

```
<DebugIf label="Toggle Modal" :condition="showModal">
  <VueModal slot-scope="{show}" v-if="show" />
</DebugIf>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
