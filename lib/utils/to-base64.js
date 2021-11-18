"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBase64 = exports.tagsToBase64 = void 0;
var to_tlv_1 = require("./to-tlv");
/**
 * Converts a tags array to a base64 string using the TLV encoding
 * @param {Tag[]} tags
 * @return {string} representing base64 of tags TLV
 */
function tagsToBase64(tags) {
    return Buffer.from((0, to_tlv_1.toTlv)(tags)).toString('base64');
}
exports.tagsToBase64 = tagsToBase64;
/**
 * Converts a string with utf8 encoding to a base64 string
 * @param {string} value with utf8 encoding
 * @return {string} representing base64
 */
function toBase64(value) {
    return Buffer.from(value).toString('base64');
}
exports.toBase64 = toBase64;
