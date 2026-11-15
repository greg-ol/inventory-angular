import { Item } from "../models/inventory.models";

export interface ParseResult {
    items: Item[];
    errors: string[];
}

const LINE = /^(.+?)\s+(-?\d+)\s+(-?\d+)$/;

export function parseInventoryText(text: string): ParseResult {
 
    const items: Item[] = [];
    const errors: string[] = [];

    text.split(/\r?\n/).forEach((raw, index) => {
        const line = raw.trim();
        if(!line) return;

        const m = LINE.exec(line);
        if(!m) {
            errors.push(`Line ${index + 1}: cannot parse "${line}"`);
            return;
        }
        items.push({name: m[1], sellIn: Number(m[2]), quality: Number(m[3])});
    });
    return {items, errors};
}