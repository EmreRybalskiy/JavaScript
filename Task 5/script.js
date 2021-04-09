const group = [
  {
    name: "Андрей",
    lastName: "Андреевич",
    age: 18,
    notebook: false,
  },
  {
    name: "Коcтя",
    lastName: "Одесеевич",
    age: 28,
    notebook: true,
  },
  {
    name: "Миша",
    lastName: "Ликеевич",
    age: 23,
    notebook: false,
  },
  {
    name: "Алексей",
    lastName: "Ололшевич",
    age: 32,
    notebook: true,
  },
];

function getStudentsList(arrayOfStudents) {
  arrayOfStudents.forEach(function (item) {
    item.toString = function () {
      let str = "";
      for (key in this) {
        if(typeof this[key] !== 'function') {
          str += key.charAt(0).toUpperCase() + key.slice(1) + " - " + this[key] + ", ";
        }
      }
    
      return str.substring(0, str.length - 2);
    };
    console.log(String(item));
  });
};

getStudentsList(group);
