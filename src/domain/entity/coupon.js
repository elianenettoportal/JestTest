var moment = require('moment');

class Coupon {
	constructor(coupon) {
		this.createCoupon(coupon);
	}

	createCoupon = coupon => {
		return this.coupon = {
            code           : coupon.code,
            percentage     : coupon.percentage,
            expirationDate : coupon.expirationDate
		};
	};

    isCuponExpired = (today) =>{
        let isExpired = true;
        if(!this.coupon ){
            return "Coupon is invalid"
        }
        if(!this.coupon.expirationDate){
            return false;
        }
        try{
            let date = moment(this.coupon.expirationDate);
            if(date.isValid()){
                isExpired = date.isBefore(today);
            }

            return isExpired;
        } catch(e){
            console.log("e", e)
            return e;
        }
    };
}
module.exports = Coupon; 