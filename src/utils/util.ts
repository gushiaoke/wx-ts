export function formatTime(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

export function formatNumber(n: number | string) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

export function base64_encode(str: string) {
    let c1;
    let c2;
    let c3;
    const base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let i = 0;
    const len = str.length;
    let result: string = '';

    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i === len) {
            result += base64EncodeChars.charAt(c1 >> 2);
            result += base64EncodeChars.charAt((c1 & 0x3) << 4);
            result += '==';
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i === len) {
            result += base64EncodeChars.charAt(c1 >> 2);
            result += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            result += base64EncodeChars.charAt((c2 & 0xF) << 2);
            result += '=';
            break;
        }
        c3 = str.charCodeAt(i++);
        result += base64EncodeChars.charAt(c1 >> 2);
        result += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        result += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        result += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return result;
}

export async function sleep(t: number) {
    return new Promise((resolve) => setTimeout(resolve, t));
}

export function trim(s: string) {
    return s.replace(/(^\s*)|(\s*$)/g, '');
}

export function ltrim(s: string) {
    return s.replace(/(^\s*)/g, '');
}

export function rtrim(s: string) {
    return s.replace(/(\s*$)/g, '');
}
