const func1 = (from, to) => {
  setInterval(() => {
    if (from < to) {
      console.log(from++);
    }
  }, 1000);
};

func1(0, 10);

const func2 = (from, to) => {
  setTimeout(function func3(){
    if (from < to) {
      console.log(from++)
      setTimeout(func3, 1000);
    }
  }, 1000);
};

func2(0,10);
