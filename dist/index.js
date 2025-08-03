"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Captcha = void 0;
const canvas_1 = require("@napi-rs/canvas");
class Captcha {
    constructor(options = {}) {
        this.options = {
            width: options.width ?? 200,
            height: options.height ?? 80,
            backgroundColor: options.backgroundColor ?? "#ffffff",
            textColor: options.textColor ?? "#000000",
            font: options.font ?? "Sans",
            fontSize: options.fontSize ?? 32,
            characters: options.characters ??
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            charLength: options.charLength ?? 6,
            noiseLines: options.noiseLines ?? 4,
            noiseDots: options.noiseDots ?? 100,
            noiseColor: options.noiseColor ?? "#888888",
        };
    }
    randomText() {
        const chars = this.options.characters;
        let result = "";
        for (let i = 0; i < this.options.charLength; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    generate(mime, quality) {
        const { width, height, backgroundColor, textColor, font, fontSize, noiseLines, noiseDots, noiseColor, } = this.options;
        const text = this.randomText();
        const canvas = (0, canvas_1.createCanvas)(width, height);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize}px ${font}`;
        const metrics = ctx.measureText(text);
        const x = (width - metrics.width) / 2;
        const y = (height + fontSize / 2) / 2;
        ctx.fillText(text, x, y);
        ctx.strokeStyle = noiseColor;
        for (let i = 0; i < noiseLines; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * width, Math.random() * height);
            ctx.lineTo(Math.random() * width, Math.random() * height);
            ctx.stroke();
        }
        for (let i = 0; i < noiseDots; i++) {
            ctx.fillStyle = noiseColor;
            const dx = Math.random() * width;
            const dy = Math.random() * height;
            ctx.fillRect(dx, dy, 1, 1);
        }
        let buffer;
        switch (mime) {
            case "image/png":
                buffer = canvas.toBuffer("image/png");
                break;
            case "image/webp":
                buffer = canvas.toBuffer("image/webp", quality);
                break;
            case "image/jpeg":
                buffer = canvas.toBuffer("image/jpeg", quality);
                break;
            case "image/avif":
                buffer = canvas.toBuffer("image/avif", { quality });
                break;
            default:
                throw new Error("Unsupported MIME type");
        }
        return { text, buffer };
    }
}
exports.Captcha = Captcha;
exports.default = Captcha;
