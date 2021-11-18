import { Tag } from './models/tag';
import { Invoice } from './models/invoice';
import { toTlv } from './utils/to-tlv';
import { tagsToBase64, toBase64 } from './utils/to-base64';
import { renderTags } from './utils/render-tags';

const tags: Tag[] = [
	new Tag(1, 'Salla'),
	new Tag(2, '1234567891'),
	new Tag(3, '2021-07-12T14:25:09Z'),
	new Tag(4, '100.00'),
	new Tag(5, '15.00'),
];

const tlv = toTlv(tags);
toBase64(tlv);
tagsToBase64(tags);
renderTags(tags);

const invoice = new Invoice({
	sellerName: 'هادي',
	vatRegistrationNumber: '1234567891',
	invoiceTimestamp: '2021-07-12T14:25:09Z',
	invoiceTotal: '100.00',
	invoiceVatTotal: '15.00',
});

invoice.toTlv();
invoice.toBase64();
invoice.render().then((qrcode) => {
	console.log(qrcode);
});
