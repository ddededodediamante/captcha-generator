# captcha-generator

A highly customizable CAPTCHA generator using canvas in TypeScript.

## Installation

```bash
npm install captcha-generator
```

## Usage

```ts
import Captcha from 'captcha-generator';
import fs from 'fs';

const captcha = new Captcha({
  width: 250,
  height: 100,
  backgroundColor: '#f0f0f0',
  textColor: '#333',
  font: 'Arial',
  fontSize: 40
});

const { text, buffer } = captcha.generate("image/png");
console.log('CAPTCHA text:', text);
fs.writeFileSync('captcha.png', buffer);
```

## API

### `new Captcha(options?: CaptchaOptions)`

Creates a CAPTCHA generator with optional settings:

| Option           | Type     | Default        | Description                         |
|------------------|----------|----------------|-------------------------------------|
| `width`          | `number` | `200`          | Canvas width in pixels              |
| `height`         | `number` | `80`           | Canvas height in pixels             |
| `backgroundColor`| `string` | `#ffffff`      | Background color                    |
| `textColor`      | `string` | `#000000`      | Color of the CAPTCHA text           |
| `font`           | `string` | `Sans`         | Font family                         |
| `fontSize`       | `number` | `32`           | Font size in pixels                 |
| `characters`     | `string` | `ABCDEFGHI...` | Characters used in the CAPTCHA text |
| `charLength`     | `number` | `6`            | Number of characters in the CAPTCHA |
| `noiseLines`     | `number` | `4`            | Number of random noise lines        |
| `noiseDots`      | `number` | `100`          | Number of random noise dots         |
| `noiseColor`     | `string` | `#888888`      | Color for noise lines and dots      |

### `generate(mime?: "image/png" | "image/webp" | "image/avif" | "image/jpeg", quality?: number): { text: string; buffer: Buffer }`

Generates the CAPTCHA, returning the text and an image buffer.
