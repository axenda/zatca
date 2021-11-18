import { Invoice } from '../src/models/invoice';

test('Invoice.toBase64() returns a valid base64 string', () => {
	const invoice = new Invoice({
		sellerName: 'Axenda',
		vatRegistrationNumber: '1234567891',
		invoiceTimestamp: '2021-12-04T00:00:00Z',
		invoiceTotal: '100.00',
		invoiceVatTotal: '15.00',
	});

	expect(invoice.toBase64())
		.toBe('AQZBeGVuZGECCjEyMzQ1Njc4OTEDFDIwMjEtMTItMDRUMDA6MDA6MDBaBAYxMDAuMDAFBTE1LjAw');
});

test('Invoice.toBase64() returns a valid base64 string using arabic seller name', () => {
	const invoice = new Invoice({
		sellerName: 'اكسندا',
		vatRegistrationNumber: '1234567891',
		invoiceTimestamp: '2021-12-04T00:00:00Z',
		invoiceTotal: '100.00',
		invoiceVatTotal: '15.00',
	});

	expect(invoice.toBase64())
		.toBe('AQzYp9mD2LPZhtiv2KcCCjEyMzQ1Njc4OTEDFDIwMjEtMTItMDRUMDA6MDA6MDBaBAYxMDAuMDAFBTE1LjAw');
});

test('Invoice.render() generates a valid qr code use arabic seller name', async () => {
	const invoice = new Invoice({
		sellerName: 'اكسندا',
		vatRegistrationNumber: '1234567891',
		invoiceTimestamp: '2021-12-04T00:00:00Z',
		invoiceTotal: '100.00',
		invoiceVatTotal: '15.00',
	});

	const imageData = await invoice.render();

	expect(imageData)
		.toBe('data:image/png;base64,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');
});
