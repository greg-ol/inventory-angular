export interface Item {
    name: string;
    sellIn: number;
    quality: number;
}

export interface UpdateRequest {
    items: Item[];
    date: string;
    days: number;
}

export interface UpdateResponse {
    inventoryDate: string;
    items: Item[]
}