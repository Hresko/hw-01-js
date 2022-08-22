const product = {
    name: 'Сервоприводи',
    description: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad, alias doloremque labore, explicabo dolorem cumque vel beatae delectus incidunt dolore consequatur, voluptatibus ab! Quae excepturi magni illum voluptates quia.',
    price: 2000,
    available: true,
    onSale: true,
};

const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = product.name;
nameEl.classList.add('product__name');

const descrEl = document.createElement('p');
descrEl.textContent = product.description
descrEl.classList.add('product__descr');

const priceEl = document.createElement('p');
priceEl.textContent = `Цена: ${ product.price}`;
priceEl.classList.add('product__price')


productEl.append(nameEl, descrEl, priceEl);


console.log(productEl);
