"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTags = void 0;
var qrcode_1 = require("qrcode");
var to_base64_1 = require("./to-base64");
function renderTags(tags, options) {
    var base64 = (0, to_base64_1.tagsToBase64)(tags);
    return (0, qrcode_1.toDataURL)(base64, options);
}
exports.renderTags = renderTags;
