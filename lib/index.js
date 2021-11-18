"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tag_1 = require("./models/tag");
var invoice_1 = require("./models/invoice");
var to_tlv_1 = require("./utils/to-tlv");
var to_base64_1 = require("./utils/to-base64");
var render_tags_1 = require("./utils/render-tags");
var tags = [
    new tag_1.Tag(1, 'Salla'),
    new tag_1.Tag(2, '1234567891'),
    new tag_1.Tag(3, '2021-07-12T14:25:09Z'),
    new tag_1.Tag(4, '100.00'),
    new tag_1.Tag(5, '15.00'),
];
var tlv = (0, to_tlv_1.toTlv)(tags);
(0, to_base64_1.toBase64)(tlv);
(0, to_base64_1.tagsToBase64)(tags);
(0, render_tags_1.renderTags)(tags);
var invoice = new invoice_1.Invoice({
    sellerName: 'هادي',
    vatRegistrationNumber: '1234567891',
    invoiceTimestamp: '2021-07-12T14:25:09Z',
    invoiceTotal: '100.00',
    invoiceVatTotal: '15.00'
});
invoice.toTlv();
invoice.toBase64();
invoice.render().then(function (qrcode) {
    console.log(qrcode);
});
