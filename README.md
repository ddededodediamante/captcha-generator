# captcha-napi-canvas

A highly customizable CAPTCHA generator using `@napi-rs/canvas` in TypeScript.

## Installation

```bash
npm install captcha-napi-canvas
```

## Usage

```ts
import Captcha from 'captcha-napi-canvas';
import fs from 'fs';

const captcha = new Captcha({
  width: 250,
  height: 100,
  backgroundColor: '#f0f0f0',
  textColor: '#333',
  font: 'Arial',
  fontSize: 40,
  charLength: 5,
  noiseLines: 5,
  noiseDots: 150,
  noiseColor: '#999'
});

const { text, buffer } = captcha.generate();
console.log('CAPTCHA text:', text);
fs.writeFileSync('captcha.png', buffer);
```

## API

### `new Captcha(options?: CaptchaOptions)`

Creates a CAPTCHA generator with optional settings:

| Option           | Type     | Default   | Description                         |
|------------------|----------|-----------|-------------------------------------|
| `width`          | `number` | `200`     | Canvas width in pixels              |
| `height`         | `number` | `80`      | Canvas height in pixels             |
| `backgroundColor`| `string` | `#ffffff` | Background color                    |
| `textColor`      | `string` | `#000000` | Color of the CAPTCHA text           |
| `font`           | `string` | `Sans`    | Font family                         |
| `fontSize`       | `number` | `32`      | Font size in pixels                 |
| `charLength`     | `number` | `6`       | Number of characters in the CAPTCHA |
| `noiseLines`     | `number` | `4`       | Number of random noise lines        |
| `noiseDots`      | `number` | `100`     | Number of random noise dots         |
| `noiseColor`     | `string` | `#888888` | Color for noise lines and dots      |

### `generate(): { text: string; buffer: Buffer }`

Generates the CAPTCHA, returning the text and an image buffer.
