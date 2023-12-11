# JustParseUrl - A Lightweight URL Parser

[![npm version](https://badge.fury.io/js/justparseurl.svg)](https://www.npmjs.com/package/justparseurl)
![License](https://img.shields.io/github/license/chanmyaemaung/justparseurl)
[![npm downloads](https://img.shields.io/npm/dt/justparseurl.svg)](https://www.npmjs.com/package/justparseurl)
[![Bundle Size](https://img.shields.io/bundlephobia/min/justparseurl)](https://bundlephobia.com/result?p=justparseurl)
[![TypeScript](https://img.shields.io/badge/-TypeScript-blue)](https://www.typescriptlang.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/chanmyaemaung/justparseurl/issues)

JustParseUrl is a lightweight and versatile utility designed for parsing URLs effortlessly in both JavaScript and TypeScript. Whether you're working on server-side applications with Node.js, building modern Frontend Libraries (ES6 Module), or crafting vanilla JavaScript for CDN delivery, JustParseUrl seamlessly fits into your web development ecosystem.

## Demo

[![Code Pen](https://img.shields.io/badge/-CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/chenlay/pen/rNPRzEO?editors=1000)

## Table of Contents

- [JustParseUrl - A Lightweight URL Parser](#justparseurl---a-lightweight-url-parser)
  - [Demo](#demo)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Node.js](#nodejs)
  - [Frontend Libraries (ES6 Module)](#frontend-libraries-es6-module)
  - [CDN (Vanilla JS)](#cdn-vanilla-js)
    - [Include the script in your HTML file:](#include-the-script-in-your-html-file)
  - [API](#api)
    - [constructor(input: string)](#constructorinput-string)
    - [Properties](#properties)
    - [getDetails()](#getdetails)
  - [Usage](#usage-1)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

You can install JustParseUrl via npm:

```bash
npm install justparseurl
```

## Usage

### Node.js

```javascript
const JustParseUrl = require("justparseurl");

const urlInstance = new JustParseUrl("https://example.com/path?query=value");
console.log(urlInstance);
```

## Frontend Libraries (ES6 Module)

```javascript
import JustParseUrl from 'justparseurl';

const urlInstance = new JustParseUrl('https://example.com/path?query=value');
console.log(urlInstance.);
```

## CDN (Vanilla JS)

### Include the script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/justparseurl@1.0.2/dist/justparseurl.min.js"></script>

<script>
  const urlInstance = new JustParseUrl('https://example.com/path?query=value');
  console.log(urlInstance);
</script>

```

## API

### constructor(input: string)

Creates a new instance of the `JustParseUrl` class with the provided URL.

### Properties

- `protocol: string`: The protocol scheme of the URL (e.g., `http:`).
- `slashes: boolean`: A boolean indicating whether the protocol is followed by two forward slashes (`//`).
- `auth?: string`: Authentication information portion (e.g., `username:password`).
- `username: string`: Username of basic authentication.
- `password: string`: Password of basic authentication.
- `host: string`: Host name with port number. The hostname might be invalid.
- `hostname: string`: Host name without port number. This might be an invalid hostname.
- `port: string`: Optional port number.
- `pathname: string`: URL path.
- `query: Record<string, string>`: Parsed object containing query string.
- `hash: string`: The "fragment" portion of the URL including the pound-sign (`#`).
- `href: string`: The full URL.
- `origin: string`: The origin of the URL.

### getDetails()

Returns an object with details about the parsed URL, including properties like `protocol`, `hostname`, `pathname`, `query`, and more. The details are automatically populated upon creating an instance of the `JustParseUrl` class; there's no need for an exclusive call to this method.

## Usage

```javascript
const justParseUrl = new JustParseUrl('https://example.com/path?query=value');
console.log(justParseUrl.getDetails());
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [ISC License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

