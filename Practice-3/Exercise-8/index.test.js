const setPrice = (item, price) => {
    return {
        ...item,
        price: price,
    };
};

const addToCart = (cart, item) => {
    return [...cart, item];
};

describe('setPrice()', () => {
    it('should set the price in the given item object, immutably.', () => {
        const item = {
            name: 'test',
            price: 30,
        };
        const copy = Object.assign({}, item);

        const actual = setPrice(item, 50);
        const expected = {
            name: 'test',
            price: 50,
        };

        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
});
