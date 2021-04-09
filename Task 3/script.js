function getNewArray() {
    for (key in this) {
        if (key === 'values') {
            const newArr = this[key].filter(function(el){
                if (el > 2 && el < 10 && typeof el === 'number' && el % 2 === 0) {
                    return el;
                }
            });
            console.log(newArr);
        } else {
            console.log('Нет такого');
        }
    };
};
   
const valObject0  = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false]
};
   
const result = getNewArray.bind(valObject0 ); 
result();