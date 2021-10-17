class PlaceOrderInput {

    constructor(cpf, orderItems, issueDate, coupon) {
		    this.cpf = cpf;
        this.orderItems = orderItems;
        this.issueDate = issueDate;
        this.coupon = coupon;
	}
}
module.exports = PlaceOrderInput;