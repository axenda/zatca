import { Tag } from './tag';
import { toTlv } from '../utils/to-tlv';
import { toBase64 } from '../utils/to-base64';
import { QRCodeToDataURLOptions, toDataURL } from 'qrcode';

/**
 * Invoice interface
 */
interface IInvoice {
	sellerName: string;
	vatRegistrationNumber: string;
	invoiceTimestamp: string;
	invoiceTotal: string;
	invoiceVatTotal: string;
}

/**
 * Invoice class
 */
export class Invoice {
	private readonly _tlv: string;

	constructor(invoice: IInvoice) {
		this._tlv = toTlv([
			new Tag(1, invoice.sellerName),
			new Tag(2, invoice.vatRegistrationNumber),
			new Tag(3, invoice.invoiceTimestamp),
			new Tag(4, invoice.invoiceTotal),
			new Tag(5, invoice.invoiceVatTotal),
		]);
	}

	/**
	 * Returns the TLV representation of the invoice
	 * @return {string}
	 */
	toTlv(): string {
		return this._tlv;
	}

	/**
	 * Returns a base64 string representing the invoice
	 * @return {string}
	 */
	toBase64(): string {
		return toBase64(this._tlv);
	}

	/**
	 * Returns a QR code as base64 data image
	 * @return {string}
	 */
	render(options?: QRCodeToDataURLOptions): Promise<string> {
		return toDataURL(this.toBase64(), options);
	}
}


