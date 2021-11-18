"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = void 0;
/**
 *  Convert a string to a hex string encoded with UTF-8
 * @param {number} value
 * @return {string}
 */
function toHex(value) {
    var hex = value.toString(16);
    if ((hex.length % 2) > 0) {
        hex = '0' + hex;
    }
    return Buffer
        .from(hex, 'hex')
        .toString('utf-8');
}
exports.toHex = toHex;
