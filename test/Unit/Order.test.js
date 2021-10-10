//const { orderExecutionWithDiscount, orderExecution } = require('../src/domain/entity/order');
const Order = require('../../src/domain/entity/order');
const Item   = require('../../src/domain/entity/item');

describe("Validate Order Execution", ()=> {
    
    test("Should have a minimum of 3 items", ()=> {
        const output = 6090;
        const items =[
            {id: "1", description:"Musical Instrument", name: "Guitar", price: 1000, quantity: 1 },
            {id: "2", description:"Musical Instrument", name: "Guitar Cable", price: 30, quantity: 3 },
            {id: "3", description:"Musical Instrument", name: "Amplifier",  price: 5000, quantity: 1 },
        ];
       
        const order = new Order(items);
        expect(order.orderExecution()).toEqual(output); 
    });

    test("Should apply coupon discount on top of order ", ()=> {
        const discount = 20/100;
        const output = 6090 - (6090*0.20);

        const items =[
            {item: "1", description:"Musical Instrument", name: "Guitar", price: 1000, quantity: 1 },
            {item: "2", description:"Musical Instrument", name: "Guitar Cable", price: 30, quantity: 3 },
            {item: "3", description:"Musical Instrument", name: "Amplifier",  price: 5000, quantity: 1 },
        ];
        
        const order = new Order(items,discount);
        expect(order.orderExecutionWithDiscount()).toEqual(output); 
      // expect(orderExecutionWithDiscount(inputOrder, discount)).toThrow(TypeError)
    });

})
