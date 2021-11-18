"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var to_hex_1 = require("../utils/to-hex");
/**
 * Tag class
 *
 */
var Tag = /** @class */ (function () {
    function Tag(tag, value) {
        this.tag = tag;
        this.value = value;
    }
    /**
     * Returns the tlv representation of the tag
     * @return {string}
     */
    Tag.prototype.toTlv = function () {
        return (0, to_hex_1.toHex)(this.tag) + (0, to_hex_1.toHex)(this.getValueByteLength()) + this.value;
    };
    /**
     * Returns the byte length of the tag value
     * @return {number}
     */
    Tag.prototype.getValueByteLength = function () {
        return Buffer.byteLength(this.value);
    };
    return Tag;
}());
exports.Tag = Tag;
