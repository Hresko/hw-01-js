const cart = {
  items: [],
  getIems() {
    return this.items
  },
  add(product) {
    const { items } = this;
    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct)
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i+= 1) {
      const { name } = items[i];
      if (productName === name) {
        console.log('знайшли такий продукт ', productName)
        console.log(i)

        items.splice(i, 1);
        console.log(items)
      }
    }
  },
  clear() {
    this.items = [];
    console.log(cart.getIems())
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    console.log(total)
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.log(cart.getIems());

cart.add({name: 'aplle', price: 50});
cart.add({name: 'lemon', price: 60});
cart.add({name: 'lemon', price: 60});
cart.add({name: 'greyfruit', price: 110});
cart.add({name: 'lemon', price: 60});
cart.add({name: 'aplle', price: 50});

console.table(cart.getIems());

cart.remove('aplle')

// cart.clear()

cart.countTotalPrice()