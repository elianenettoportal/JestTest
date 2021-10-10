const { stringCPFValidation} = require('../../src/domain/entity/cpf');

describe("Validate CPF", ()=> {
    test("Should invalidate the CPF", ()=> {
        const inputWrongCpf = "039.830.199-888";
        const output        = false;
        expect(stringCPFValidation(inputWrongCpf)).toBe(output);
    });

    test("Should validate wrong CPF all same", ()=> {
        const cpfsame = "111.111.111-11";
        const output  = false;
        expect(stringCPFValidation(cpfsame)).toBe(output); 
    });

    test("Should validate wrong CPF wrong size", ()=> {
        const cpfwrongsize = "111.111.11";
        const output       = false;
        expect(stringCPFValidation(cpfwrongsize)).toBe(output); 
    });

    test("Should validate wrong CPF with a b c", ()=> {
        const cpfWithAlpha = "aa.111.11";
        const output       = false;
        expect(stringCPFValidation(cpfWithAlpha)).toBe(output); 
    });

    test("Should validate CPF", ()=> {
        const cpfCorrect = "039.830.199-94";
        const output     = true;
        expect(stringCPFValidation(cpfCorrect)).toBe(output); 
    });
})

/**
 * toEqual  toBe toThrow
 * Every time you start writing a new suite of tests for a functionality wrap it 
 * in a describe block. it takes two arguments: a string for describing the 
 * test suite, and a callback function for wrapping the actual test.
 */