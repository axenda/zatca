import { toHex } from '../utils/to-hex';

/**
 * Tag class
 *
 */
export class Tag {
	constructor(private tag: number, private value: string) {
	}

	/**
	 * Returns the tlv representation of the tag
	 * @return {string}
	 */
	toTlv(): string {
		return toHex(this.tag) + toHex(this.getValueByteLength()) + this.value;
	}

	/**
	 * Returns the byte length of the tag value
	 * @return {number}
	 */
	private getValueByteLength(): number {
		return Buffer.byteLength(this.value);
	}
}


