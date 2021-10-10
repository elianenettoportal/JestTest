//const { calculateDelivery} = require('../src/domain/entity/delivery');

const Delivery = require('../../src/domain/entity/delivery');
const Item = require('../../src/domain/entity/item');

describe("Validate Delivery", ()=> {

    test("Should calculate delivery fee", ()=> {
        const input = {distance: 1000, volume: 0.003, density: 333};
        const output = 9.99;
        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input)).toEqual(output); 
    });

    test("Should calculate delivery fee", ()=> {
        const input = {distance: 1000, volume: 0.03, density: 100};
        const output = 30;
        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input)).toEqual(output); 
    });

    test("Should calculate delivery fee", ()=> {
        const input = {distance: 1000, volume: 1, density: 40};
        const output = 400;
        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input)).toEqual(output); 
    });

    test("Should set minimun fee when its calculation is equals total amount", ()=> {
        const totalPrice = 30;
        const input = {distance: 1000, volume: 0.03, density: 100};
        const output = 10;

        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input, totalPrice)).toEqual(output); 
    });

    test("Should set minimun fee when its calculation is greater than total amount", ()=> {
        const totalPrice = 10;
        const input = {distance: 1000, volume: 0.03, density: 100};
        const output = 10;

        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input, totalPrice)).toEqual(output); 
    });

    test("Should NOT set minimun fee when it is lower than  total amount", ()=> {
        const totalPrice = 50;
        const input = {distance: 1000, volume: 0.03, density: 100};
        const output = 30;

        const delivery = new Delivery();
        expect(delivery.calculateDelivery(input, totalPrice)).toEqual(output); 
    });
})