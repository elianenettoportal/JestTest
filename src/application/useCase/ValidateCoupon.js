import ItemRepository from "../../domain/repository/ItemRepository";
import Order from "../../domain/entity/Order";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";

class ValidateCoupon {

    constructor (itemRepository,orderRepository) {
        this.itemRepository = itemRepository;
        this.orderRepository = orderRepository;
    }

    // async execute(PlaceOrderInput): Promise<any> {
    //     const order = new Order(input.cpf);
    //     for (const orderItem of input.orderItems) {
    //         const item = await this.itemRepository.findById(orderItem.idItem);
    //         order.addItem(item, orderItem.quantity);
    //     }
    //     this.orderRepository.save(order);
    //     return {
    //         total: order.getTotal()
    //     }
    // }
}
module.exports = ValidateCoupon;