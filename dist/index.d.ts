export interface CaptchaOptions {
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
    font?: string;
    fontSize?: number;
    characters?: string;
    charLength?: number;
    noiseLines?: number;
    noiseDots?: number;
    noiseColor?: string;
}
export declare class Captcha {
    private options;
    constructor(options?: CaptchaOptions);
    private randomText;
    generate(mime?: "image/png" | "image/webp" | "image/avif" | "image/jpeg", quality?: number): {
        text: string;
        buffer: Buffer;
    };
}
export default Captcha;
