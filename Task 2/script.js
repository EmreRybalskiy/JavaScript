const obj = {
    a: "1",
    b: "2",
    c: "3",
    e: "4",
    o: "5",
};
let vowels = ["a", "e", "i", "o", "u"];
for (key in obj) {
    const result = vowels.some((el) => el === key);
    if (result) {
        Object.defineProperty(obj, key, {
            writable: false,
        });
    }
}
console.log(obj);
