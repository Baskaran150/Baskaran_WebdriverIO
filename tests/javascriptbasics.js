console.log('hello world')

//variabels
let a=12
var b="hi"
const c='i' //--cannot update during runtime and value also should be initlized during declaration time itself


//datatypes
a='hello everyone' //in javascript both single and double quotes are same meaning as String
b= 5000 // number
let n=true  // boolean true or false
let m=null // null is not having any value
let z=undefined //

//Concatenation and Interpolation
let itemname='book'
let price=90

let messagtoprint= 'The price of your '+itemname+' is '+price //concatination
let messagtoprint1= `The price of your ${itemname} is ${price}`//Interpolation
console.log(messagtoprint)
conole.log(messagtoprint1)

//objects
let customer =
{
    firstname: 'abc',
    lastname: 'bnb'
}
//dot notation updation
customer.firstname="air"
console.log(customer)
console.log(customer.firstname)
//bracket notation updation
customer['firstname']='AIR'
console.log(`${customer.firstname} ${customer.lastname}`)

//arrays
var nbn=["apple","orange","grape"]
console.log(nbn[0])
//update
nbn[0]="Jackfruit"

console.log(nbn)




