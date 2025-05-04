// // object, Array, touple, enum;
// console.log("oBJECT...");

// // object
// // object is a non-primitive data type that allows you to store collections of data and more complex entities.
// // const Vman1: {
// //     name: string;
// //     age: number;
// //     isEmployed: boolean;
   
// // } = {
// //     name: "John",
// //     age: 30,
// //     isEmployed: true,
 
// // };
// // console.log(Vman1.age,Vman1.isEmployed,Vman1.name); // John



// //Array

// // const Vman: {
// //     name: string;
// //     age: number;
// //     isEmployed: boolean;
// //     skills: string[];
   
// //     // skills: Array<string>;
// // } = {
// //     name: "John",
// //     age: 30,
// //     isEmployed: true,
// //     skills: ["JavaScript", "TypeScript", "React"],
// // }
   

// let favoriteLanguage1: "string"[];
// favoriteLanguage1: ["Hindi, English", "French"]



// // favoriteLanguage: Array<string>;
// // favoriteLanguage: ["Hindi, English", "French"]


// let favoriteLanguage2: "any[]";  // any[] is a type that can hold any value, including numbers, strings, objects, and arrays.
//                                   // but here you are loose your typescript features or benefits.  
// favoriteLanguage2: ["Hindi, English", "French",123, true]



// //console.log(Vman.age,Vman.isEmployed,Vman.name, Vman.skills); // John


// // Tuple
// // Tuple is a special type of array that allows you to store a fixed number of elements of different types.

// // Tuple is a data structure that allows you to store a fixed number of elements of different types.
// // Tuple is a data structure that allows you to store a fixed number of elements of different types.
// const person: {
//     name:string;
//     age:number;
//     isEmployed:boolean;
//     skills:string[];
//     productId: [number, string]; // Tuple   // Tuple is a data structure that allows you to store a fixed number of elements of different types. 


// }={
//     name:"JaySonve",
//     age: 23,
//     isEmployed: false,
//     skills:["Hindi, english,french"],
//     productId:[123, "product1"], // Tuple   // Tuple is a data structure that allows you to store a fixed number of elements of different types.
    
// }

// person.productId[0] = 345; // number

// person.productId[1] = "product2"; // string

// //person.productId[2] = true; // Error: Type 'boolean' is not assignable to type 'string'.





//Enum


enum role {
    Admin = "Admin",    // 0
    Authoer = "Authoer",  // 1
    User = "User",      // 2    // 3
    ReadUserOnly = "ReadUserOnly", // 3
}
const person = {
    name: "jayson",
    age: 24,
    isEmployed: true,
    skills: ["React"],
    product: [10, "Mackbook 13 "], // Tuple   // Tuple is a data structure that allows you to store a fixed number of elements of different types.
    role: role.Admin, // Enum   // Enum is a special "class" that represents a group of constants (unchangeable variables).
};

if(person.role === role.Admin){
    console.log("You are an Admin")
}else if(person.role === role.Authoer){    
    console.log("You are an Authoer")
}else if(person.role === role.ReadUserOnly){    
    console.log("You are an User")
}else{
    console.log("You are an Unknown Please check your role or create your and try again")
}           