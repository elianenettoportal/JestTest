//const { createItem } = require('../src/domain/entity/orderItem');

const Item   = require('../../src/domain/entity/item');

describe("Validate order item", ()=> {

    test("Should create an Order Item", ()=> {
        const thisitem = {
            id       : "1", 
            description:"Musical Instrument", 
            name       : "Guitar", 
            price      : 1000, 
            quantity   : 1,
            width      : 0,
            height     : 0,
            length     : 0,
            weight     : 0
        }; 
        const output = thisitem;
        const item = new Item(thisitem)
        expect(item.item).toEqual(output); 
    });
})