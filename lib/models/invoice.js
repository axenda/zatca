"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var tag_1 = require("./tag");
var to_tlv_1 = require("../utils/to-tlv");
var to_base64_1 = require("../utils/to-base64");
var qrcode_1 = require("qrcode");
/**
 * Invoice class
 */
var Invoice = /** @class */ (function () {
    function Invoice(invoice) {
        this._data = invoice;
    }
    Invoice.prototype._getTags = function () {
        return [
            new tag_1.Tag(1, this._data.sellerName),
            new tag_1.Tag(2, this._data.vatRegistrationNumber),
            new tag_1.Tag(3, this._data.invoiceTimestamp),
            new tag_1.Tag(4, this._data.invoiceTotal),
            new tag_1.Tag(5, this._data.invoiceVatTotal),
        ];
    };
    /**
     * Returns the TLV representation of the invoice
     * @return {string}
     */
    Invoice.prototype.toTlv = function () {
        return (0, to_tlv_1.toTlv)(this._getTags());
    };
    /**
     * Returns a base64 string representing the invoice
     * @return {string}
     */
    Invoice.prototype.toBase64 = function () {
        return (0, to_base64_1.toBase64)(this.toTlv());
    };
    /**
     * Returns a QR code as base64 data image
     * @return {string}
     */
    Invoice.prototype.render = function (options) {
        return (0, qrcode_1.toDataURL)(this.toBase64(), options);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
