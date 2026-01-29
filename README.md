# @liuxspro/vue-components

A lightweight Vue 3 component library built with TypeScript and Tailwind CSS.

## Features

- 🚀 Built with Vue 3 Composition API & TypeScript
- 🎨 Styled with Tailwind CSS v4
- 📦 Tree-shaking friendly ES module exports
- 🔧 Vite-powered development and build tooling
- 🎯 Fully typed with TypeScript

## Installation

```bash
npm install @liuxspro/vue-components
# or
yarn add @liuxspro/vue-components
# or
pnpm add @liuxspro/vue-components
```

## Usage

```javascript
import { CodeWith } from '@liuxspro/vue-components'

// In your Vue component
<template>
  <CodeWith name="Your Name" class="custom-class" />
</template>
```

## Peer Dependencies

This library requires:
- Vue 3.5.0+
- Tailwind CSS 4.1.18+

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build library for production
pnpm build:lib

# Run type checking
pnpm type-check

# Clean build artifacts
pnpm clean
```

## License

MIT © Liu Xingsheng
