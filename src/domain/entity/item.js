class Item {
    constructor(item) {
		this.createItem(item);
	}

    createItem = (item) =>{
       return this.item = { 
            id       : item.id, 
            description: item.description, 
            name       : item.name, 
            price      : item.price, 
            quantity   : item.quantity,
            width      : 0,
            height     : 0,
            length     : 0,
            weight     : 0
        }
    };

    getVolume = () =>{
        return this.item.width/100 * this.item.height/100 * this.item.length/100;
    }

    getDensity = () =>{
        return this.item.weight/this.getVolume();
    } 

    getDeliveryFee () {
        const deliveryFee = 1000 * this.getVolume() * (this.getDensity()/100);
        return (deliveryFee < 10) ? 10 : deliveryFee;
    }
}
module.exports = Item