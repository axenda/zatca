import { QRCodeToDataURLOptions, toDataURL } from 'qrcode';
import { Tag } from '../models/tag';
import { tagsToBase64 } from './to-base64';

export function renderTags(tags: Tag[], options?: QRCodeToDataURLOptions): Promise<string> {
	const base64 = tagsToBase64(tags);
	return toDataURL(base64, options);
}
