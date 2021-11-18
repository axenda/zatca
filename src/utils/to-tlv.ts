import { Tag } from '../models/tag';

/**
 * Converts a tags array to a TLV string
 * @param {Tag[]} tags
 * @return {string}
 */
export function toTlv(tags: Tag[]): string {
	return tags.map(tag => tag.toTlv()).join('');
}
