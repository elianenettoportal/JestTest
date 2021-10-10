const repository = require('../../src/infra/repository/itemRepository');


describe("DB connection", ()=> {

        test("Deve criar uma conexão com o banco de dados", async function () {
                const result = await repository.findAll(10);
                console.log("result", result);
                expect(result.length).toEqual(0);
        });

})