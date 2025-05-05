// console.log("hello world")
function combine(n1, n2, conversion) {
    // function combine (n1:number | string, n2:number| string, conversion : "as number" | "as string") {
    // let result : number | string; // union type
    // let result : any; // any type
    var result;
    if (typeof n1 === "number" && typeof n2 === "number" || conversion === "as number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as number"); // 30
var sum2 = combine(10, "20", "as number"); // 1020
var combineName = combine("raj", "kumar", "as string"); // rajkumar
console.log(sum1, sum2, combineName); // 30
var User = {
    name: "raj",
    age: 20,
    hobbies: ["sports", "cooking"],
};
function greet(user) {
    console.log("hello " + user.name + " you are " + user.age + " years old");
    console.log(user.hobbies);
}
