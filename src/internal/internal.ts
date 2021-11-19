/**
 * This is a play area for internal stuff.
 * You can write code the way you like,
 * but it will not be part of the final build.
 */

import { Tag } from '../models/tag';
import { Invoice } from '../models/invoice';
import { tagsToBase64 } from '../utils/to-base64';
import { toHex } from '../utils/to-hex';

const tags: Tag[] = [
	new Tag(1, 'Axenda'),
	new Tag(2, '1234567891'),
	new Tag(3, '2021-12-04T00:00:00Z'),
	new Tag(4, '100.00'),
	new Tag(5, '15.00'),
];

//toBase64(tlv);
tagsToBase64(tags);
//renderTags(tags);

const invoice = new Invoice({
	sellerName: 'Axenda',
	vatRegistrationNumber: '1234567891',
	invoiceTimestamp: '2021-12-04T00:00:00Z',
	invoiceTotal: '100.00',
	invoiceVatTotal: '15.00',
});

invoice.toBase64();
//invoice.render().then((qrcode) => {
//	console.log(qrcode);
//});

console.log('-------------------------');

toHex(1);
