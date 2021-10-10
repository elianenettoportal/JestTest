
class Delivery{

    constructor() {	
	}
// o que fiz com totalprice
    calculateDelivery = (item, totalPrice) =>{
        const minimunDeliveryFee = 10;

            if(!Number.isInteger(item.distance) || !Number.isInteger(item.density)){
            return "Distance or Density are incorrect"
        }
        if(item.volume instanceof String ){
            return "Delivery volume is incorrect"
        }
        try{
                const deliveryFee =  (item.distance * item.volume * (item.density/100));
                if(totalPrice && (deliveryFee >= totalPrice) ){
                    return minimunDeliveryFee
                }else{
                    return deliveryFee;
                }
        }catch(e){
                return `${e} delivery calculation went wrong`;
        } 
    };
}
module.exports = Delivery; 