
class Order {

    constructor(items, coupon) {
		this.orderItemns = items;
        this.coupon = coupon;
        // this.cpf=
        // this.deliveryFee
        // this.issueDate=

	}

    orderExecution = () =>{
        if(!this.orderItemns || this.orderItemns.length < 3){
            return "Order limit not valid";
        }
        const orderAmount = this.totalItemsPrice(this.orderItemns);
        if(Number.isInteger(orderAmount)){
            return orderAmount;
        }else{
            return false;
        }
        
    };

    orderExecutionWithDiscount = () =>{
        if(!this.orderItemns || this.orderItemns.length < 3 || !this.coupon){
            return "Order Itemns incorrect";
        }
        if(!this.coupon || this.coupon % 1 === 0){
            return "Coupon is invalid";
        }
        const orderAmount = this.totalItemsPrice(this.orderItemns);
        if(Number.isInteger(orderAmount)){
            try{
                return orderAmount - (orderAmount * this.coupon);
            }catch(e){
                return `${e} Invalid Coupon`;
            }
        }else{
            return "Order amount is incorrect";
        }
        
    };

    totalItemsPrice = (items) => {
        let totalPrice = items.reduce((memo, item)=>{
            if(item.price && item.quantity){
                memo = memo+(item.price*item.quantity);
            }
            return memo;
        }, 0);

        return totalPrice;
    };
}
module.exports = Order;