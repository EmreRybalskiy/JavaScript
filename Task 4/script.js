const obj = {};

let key = prompt('Введите ключ', '');
let value = prompt('Введите значение', '');


const checkValue = (key, value, object) => {
  if (key in obj) {
    console.log('Уже есть : ', key);
  } else {
    object[key] = value;
  }
};

checkValue(key, value, obj);
checkValue(key, value, obj); 
console.log(obj);