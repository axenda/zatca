import { Tag } from '../models/tag';
/**
 * Converts a tags array to a base64 string using the TLV encoding
 * @param {Tag[]} tags
 * @return {string} representing base64 of tags TLV
 */
export declare function tagsToBase64(tags: Tag[]): string;
/**
 * Converts a string with utf8 encoding to a base64 string
 * @param {string} value with utf8 encoding
 * @return {string} representing base64
 */
export declare function toBase64(value: string): string;
