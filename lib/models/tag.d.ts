/**
 * Tag class
 *
 */
export declare class Tag {
    private tag;
    private value;
    constructor(tag: number, value: string);
    /**
     * Returns the tlv representation of the tag
     * @return {string}
     */
    toTlv(): string;
    /**
     * Returns the byte length of the tag value
     * @return {number}
     */
    private getValueByteLength;
}
