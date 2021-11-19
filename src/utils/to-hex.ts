/**
 *  Convert a string to a hex string encoded with UTF-8
 * @param {number} value
 * @return {string}
 */
export function toHex(value: number): string {
	let hex = value.toString(16);

	if ((hex.length % 2) > 0) {
		hex = '0' + hex;
	}

	return Buffer
		.from(hex, 'hex')
		.toString('utf-8');
}
