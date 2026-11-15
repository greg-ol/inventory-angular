import { parseInventoryText } from "./text-parser";

describe('text-parser', () => {
   
    it('returns no items for empty input', () => {
        expect(parseInventoryText('')).toEqual({items: [], errors: []});
        expect(parseInventoryText(' \n \n')).toEqual({items: [], errors: []});
    });

    it('reports unparseable lines', () => {
        const {items, errors} = parseInventoryText('Aged Brie 1 20\nNot valid line');
        expect(items.length).toBe(1);
        expect(errors).toEqual(['Line 2: cannot parse "Not valid line"']);
    });

    it('handles whitespaces', () => {
        const {items, errors} = parseInventoryText('   Normal Item 20 \t 30 \n\n\nSulfuras 0 80');
        expect(errors).toEqual([]);
        expect(items).toEqual([
            {name: 'Normal Item', sellIn: 20, quality: 30},
            {name: 'Sulfuras', sellIn: 0, quality: 80}
        ]);
    });

    it('reads digits that are part of the name', () => {
        expect(parseInventoryText('Normal Item 22 -1 20').items).toEqual([{name: 'Normal Item 22', sellIn: -1, quality: 20}]);
    });

     it('converts list of strings', () => {
         const list = 'ItemA 1 20\n ItemB -1 0\n ItemC 10 10';
         const {items, errors} = parseInventoryText(list);

         expect(errors).toEqual([]);
         expect(items.length).toBe(3);
         expect(items[0]).toEqual({name: 'ItemA', sellIn: 1, quality: 20});
         expect(items[1]).toEqual({name: 'ItemB', sellIn: -1, quality: 0});
         expect(items[2]).toEqual({name: 'ItemC', sellIn: 10, quality: 10});
     });
});