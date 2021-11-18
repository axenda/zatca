import { Tag } from '../models/tag';
import { toTlv } from './to-tlv';

/**
 * Converts a tags array to a base64 string using the TLV encoding
 * @param {Tag[]} tags
 * @return {string} representing base64 of tags TLV
 */
export function tagsToBase64(tags: Tag[]): string {
	return Buffer.from(toTlv(tags)).toString('base64');
}

/**
 * Converts a string with utf8 encoding to a base64 string
 * @param {string} value with utf8 encoding
 * @return {string} representing base64
 */
export function toBase64(value: string): string {
	return Buffer.from(value).toString('base64');
}
