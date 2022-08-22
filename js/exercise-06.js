const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1
    } = {}) {
    // this._rootSelector = rootSelector
    this._value = initialValue; 
    this._step = step;

    this._getRefs(rootSelector)
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log(rootSelector)

    const refs = {};
    refs.container = document.querySelector(rootSelector)
    console.log(refs.container)
}

CounterPlugin.prototype.increment = function() {
    this._value += this._step;
}

CounterPlugin.prototype.dencrement = function() {
    this._value -= this._step;
}

const counter1 = new CounterPlugin({rootSelector: '#counter-1',step: 30});

console.log(counter1);

const counter2 = new CounterPlugin({rootSelector: '#counter-2',step: 2});
console.log(counter2);