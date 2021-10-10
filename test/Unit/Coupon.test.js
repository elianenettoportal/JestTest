const Coupon = require('../../src/domain/entity/coupon');
//import Coupon from '../src/domain/entity/coupon';

describe("Validate Coupon", ()=> {

    test("Should create a Coupon", ()=> {
        const output = {
            code           : "Code1",
            percentage     : 20/100,
            expirationDate : '2021-10-20'
        };
        const thiscoupn = {
            code           : "Code1",
            percentage     : 20/100,
            expirationDate : '2021-10-20'
        };
        const coupon = new Coupon(thiscoupn);
        expect(coupon.coupon).toEqual(output); 
    });

    test("Should refure expired cupon if expired date less than today", ()=> {
        const output = false;
        const thiscoupon = {
            code           : "Code1",
            percentage     : 20/100,
            expirationDate : '2021-10-04'
        };
        const coupon = new Coupon(thiscoupon);
        expect(coupon.isCuponExpired(new Date('2021-10-04'))).toBe(output); 
    });

    test("Should not refure expired cupon if expired date grether than today", ()=> {
        const output = true;
        const thiscoupon = {
            code           : "Code2",
            percentage     : 10/100,
            expirationDate : '2021-10-01'
        };
        const coupon = new Coupon(thiscoupon);
        expect(coupon.isCuponExpired(new Date('2021-11-22'))).toBe(output); 
    });

    // test("Should not refure expired cupon if today is empty", ()=> {
    //     const coupon = {
    //         code           : "Code2",
    //         percentage     : 10/100,
    //         expirationDate : '2021-10-01'
    //     };
    //     const output = "erro";
    //     expect(isCuponExpired(coupon, null)).toThrow();  
    // }); como retornar uma mensagem de erro?

    test("Should validate a coupon never expired", ()=> {
        const output = false;
        const thiscoupon = {
            code           : "Code3",
            percentage     : 10/100,
        };
        const coupon = new Coupon(thiscoupon);
        expect(coupon.isCuponExpired(null)).toBe(output); 
    });

})