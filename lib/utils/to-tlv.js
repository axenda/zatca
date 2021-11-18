"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTlv = void 0;
/**
 * Converts a tags array to a TLV string
 * @param {Tag[]} tags
 * @return {string}
 */
function toTlv(tags) {
    return tags.map(function (tag) { return tag.toTlv(); }).join('');
}
exports.toTlv = toTlv;
