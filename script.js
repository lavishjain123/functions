// Function Step:2
// 1.Create or defie a function with function keyword
// 2.call or invoke the function

// Types of function
// 1.Regular function 
// 2.Parameters


// function displayMessage(name="manthan"){

//     //Logic 
//     console.log("Hello .I am " + name);
 
// }

// displayMessage();




// function getPerimeterRectangle(length,breadth){
//     //Logic 
//     var perimeter=2*(length+breadth);
//     console.log("Perimter: " + perimeter);
// }
// let length=10;
// let breadth=20;
// getPerimeterRectangle(length,breadth);//calling function
Xmlhttprequest=>
Function:
A function is basically a group of statement 
that perform specific task
1.reuse the same function 
2.Debug the code

function divides code into small small parts
FUnction default arg
if we are providing name while calling function,
then it takes the same which is passed as argument
otherwise , it will take default arg  which is passed
in function defination.

1 person-> 1 day.
Food(2),Games(2),Dance(3) ,Quiz(2),Prizes(2)

Write a program to create a function to 
calculate perimeter of rectangle


2*(length+breadth)

[1,2,5,16,25,99,101]


Anonymous function:
A function without any name is known as

Login
onclick
addEventListener
Onload
Onkeypress













10000
1000
1000
1000
1000
1000





//Anonymous function
// let getPerimeterRectangle=(length,breadth)=>{
//     //Logic 
//     let perimeter=2*(length+breadth);
//     console.log("Perimeter: " + perimeter);
// }

// getPerimeterRectangle(10,20);

//IIFE Function=>Immediately Invoked Function Expression
// This function run for only 1 time as soon as your browser find this function
// ((num1, num2) => {
//     console.log("Immediately Invoked Function Expression");
//     console.log(num1 + num2);
// }
// )(10,20);

// Arrow function
//Return all the primes number given in array

// let prime=(arr)=>{
//     return arr.filter((n)=>{
//         for(let i=2;i<n;i++){
//             if(n%i===0) //num having more than one factor 
//             return false;
//         }
//         return n>1;
//     })
// }

// console.log(prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]));

//create an object 
// let mobile={
//     brand:"Samsung",
//     color:"blue",
//     price:"45000",
//     version:"1.0",
// }

// //create function to display the data 
// function printMobileData(mobile){
//     console.log(`
//     Brand:${mobile.brand}
//     Color:${mobile.color}
//     Price:${mobile.price}
//     Version:${mobile.version}
    
//     `)
// }

// printMobileData(mobile)


//create an array use function to pass complete arry data as an argument
let mobiles=["Apple","Samsung","Vivo","Oppo","Nokia","Oneplus"]

function displayMobile(obj){
    console.log(
        `1:${obj[0]}
        2:${obj[1]}
        3:${obj[2]}
        4:${obj[3]}
        5:${obj[4]}
        6:${obj[5]}`

    )

}


displayMobile(mobiles)


function newfunction(){
    return {
        console.log("My new changes")
    }
}