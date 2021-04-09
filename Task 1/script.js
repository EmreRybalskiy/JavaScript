class ITCompany {
    create(worker) {
        if (worker === "Programmer") {
            return new Programmer("Вася", 24);
        }
        if (worker === "Tester") {
            return new Tester("Петя", 32);
        }
        throw new Error("ERROR");
    }
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(`${this.name}`);
    }
    getAge() {
        console.log(`${this.age}`);
    }
    static getType() {
        return `Человек`;
    }
}

class Programmer extends Human {
    constructor(name, age) {
        super(name, age);
        this.job = "Programmer";
    }
    static getJob(job) {
        console.log(job);
    }
}

class Tester extends Human {
    constructor(name, age) {
        super(name, age);
        this.job = "Tester";
    }
    static getJob(job) {
        console.log(job);
    }
}

const company = new ITCompany();

const programmer = company.create("Programmer");
const tester = company.create("Tester");
Programmer.getJob(programmer.job)
Tester.getJob(tester.job)
console.log(programmer);
console.log(tester);
