import { QRCodeToDataURLOptions } from 'qrcode';
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
export declare class Invoice {
    private readonly _data;
    constructor(invoice: IInvoice);
    private _getTags;
    /**
     * Returns the TLV representation of the invoice
     * @return {string}
     */
    toTlv(): string;
    /**
     * Returns a base64 string representing the invoice
     * @return {string}
     */
    toBase64(): string;
    /**
     * Returns a QR code as base64 data image
     * @return {string}
     */
    render(options?: QRCodeToDataURLOptions): Promise<string>;
}
export {};
