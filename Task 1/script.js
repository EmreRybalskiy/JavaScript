function bindFunc(func, someValue, ...args) {       
    return func.bind(someValue, ...args);
};

function fn() {
    console.log(this);
}
    
const obj = {
    name: 'Andrey',
    lastname: 'Andreev',
    age: 21
};

const result = bindFunc(fn, obj);
result();



















