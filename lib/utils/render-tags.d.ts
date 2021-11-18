import { QRCodeToDataURLOptions } from 'qrcode';
import { Tag } from '../models/tag';
export declare function renderTags(tags: Tag[], options?: QRCodeToDataURLOptions): Promise<string>;
