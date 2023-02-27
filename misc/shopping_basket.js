const Sweets = require('./sweets')

class ShoppingBasket {

    constructor(items) {
        this.items = items;
    }

    addItem(item) {
        this.items.push(item)
    }

    getTotalPrice() {
        let totalprice = this.items.map((item) => {
            return item.getPrice();
        })
        return totalprice.reduce((a, b) => a + b, 0)
    }
}

module.exports = ShoppingBasket;

let marsbar = new Sweets('Mars', 4.99)

console.log('Sweets unit tests:')
console.log(marsbar.getName());
console.log(marsbar.getPrice());

// let items_array = [
//     new Sweets('Twix', 2.99),
//     new Sweets('Skittles', 3.99)
// ];

let basket = new ShoppingBasket([]);

console.log('ShoppingBasket int tests:')
console.log(basket.getTotalPrice());
basket.addItem(new Sweets('Skittle', 3.99));
console.log(basket.getTotalPrice());
basket.addItem(new Sweets('Skittle', 3.99));
console.log(basket.getTotalPrice());

