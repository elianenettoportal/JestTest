var moment = require('moment');

class OderCode {
	constructor(date, sequence) {
		this.createOderCode(date, sequence);
	}

	createCoupon = (date, sequence) => {
		return this.OderCode = {
            date      : date,
            sequence  : sequence
		};
	};
}
module.exports = OderCode; 