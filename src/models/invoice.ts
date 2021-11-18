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
	private readonly _data: IInvoice;

	constructor(invoice: IInvoice) {
		this._data = invoice;
	}

	private _getTags() {
		return [
			new Tag(1, this._data.sellerName),
			new Tag(2, this._data.vatRegistrationNumber),
			new Tag(3, this._data.invoiceTimestamp),
			new Tag(4, this._data.invoiceTotal),
			new Tag(5, this._data.invoiceVatTotal),
		];
	}

	/**
	 * Returns the TLV representation of the invoice
	 * @return {string}
	 */
	toTlv(): string {
		return toTlv(this._getTags());
	}

	/**
	 * Returns a base64 string representing the invoice
	 * @return {string}
	 */
	toBase64(): string {
		return toBase64(this.toTlv());
	}

	/**
	 * Returns a QR code as base64 data image
	 * @return {string}
	 */
	render(options?: QRCodeToDataURLOptions): Promise<string> {
		return toDataURL(this.toBase64(), options);
	}
}


