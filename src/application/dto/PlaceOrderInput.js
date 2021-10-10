class PlaceOrderInput {

    constructor(cpf, orderItems) {
		this.cpf = cpf;
        this.orderItems = orderItems;
	}
}
module.exports = PlaceOrderInput;