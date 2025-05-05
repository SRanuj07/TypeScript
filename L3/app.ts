// console.log("hello world")


// union | (pipe denotes union type) 

// function combine (n1:number | string, n2:number| string) {
//     // let result : number | string; // union type
//     // let result : any; // any type

//     let result ;

//     if (typeof n1 === "number" && typeof n2 === "number") {
//         result = n1 + n2;
//     } else {
//         result = n1.toString() + n2.toString();
//     }

//     return result;




// }
// const sum = combine(10,20)
// const combineName = combine("raj" , "kumar")

// console.log(sum) // 30
// console.log(combineName) // rajkumar


//! Literals


// function combine(n1: number | string, n2: number | string, conversion: "as number" | "as string") {
//     // function combine (n1:number | string, n2:number| string, conversion : "as number" | "as string") {
//     // let result : number | string; // union type
//     // let result : any; // any type

//     let result;

//     if (typeof n1 === "number" && typeof n2 === "number" || conversion === "as number") {
//     result = +n1 + + n2;
//     } else {
//         result = n1.toString() + n2.toString();
//     }

//     return result;




// }
// const sum1 = combine("10", "20", "as number") // 30
// const sum2 = combine(10, "20", "as number") // 1020
// const combineName = combine("raj", "kumar", "as string") // rajkumar

// console.log(sum1, sum2, combineName) // 30
// //console.log(combineName) // rajkumar









//custom types// type aliases

type Combinable = number | string; // type alias
type ConversionDescriptor = "as number" | "as string"; // type alias



function combine(n1: Combinable, n2: Combinable, conversion: ConversionDescriptor) {
    // function combine (n1:number | string, n2:number| string, conversion : "as number" | "as string") {
    // let result : number | string; // union type
    // let result : any; // any type

    let result;

    if (typeof n1 === "number" && typeof n2 === "number" || conversion === "as number") {
        result = +n1 + + n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    return result;




}
const sum1 = combine("10", "20", "as number") // 30
const sum2 = combine(10, "20", "as number") // 1020
const combineName = combine("raj", "kumar", "as string") // rajkumar

console.log(sum1, sum2, combineName) // 30
//console.log(combineName) // rajkumar



type user = {
    name: string,        
    age: number,
    hobbies: string[], // array of strings
    }
const User:user = {
    name: "raj",        
    age: 20,
    hobbies: ["sports", "cooking"],
     
}

function greet(user: user) {
    console.log("hello " + user.name + " you are " + user.age + " years old")
    console.log(user.hobbies)
}


