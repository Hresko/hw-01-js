const pizzas = ['margarita', 'pepperoni'];

function makeOrder(pizzaName, onSuccess, onError) {
    if(pizzas.includes(pizzaName)) {
        const result = onSuccess(pizzaName);
        console.warn(result)
        return;
    }
    onError(`There is no pizza with name ${pizzaName}.`)
}

function makeAnotherOrder(pizzaName, onSuccess, onError) {
    if (pizzas.includes(pizzaName)) {
        onSuccess(pizzaName);
        return;
    }
    onError(`There is no pizza with name ${pizzaName}.`)
}

const successCallback = (name) => {
    // console.log(`Pizza ${name} is READY`)
    return console.log(`Pizza ${name} is READY`)
}

const failCallback = (logString) => {
    console.log(logString)
}

makeAnotherOrder('pepperoni', successCallback, failCallback);