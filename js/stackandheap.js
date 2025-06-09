//stack->primitive->copy of the real value

// primitive->

// string
// number
// boolean
// null
// undefined
// bigint
// symbol
let username = "ISHIKA"
console.log(username)
username = "VANSHIKA"
console.log(username)

//heap->non primitive->reverence of original value

//non primitive->

// Object
// Array (which is also an object)
// Function (also an object)
// Custom objects ({}, new Object(), etc.)
let userinfo={
    name : "ISHIKA NEGI",
    email :"ishikanegi@gmail.com",
    age : 19

}
console.log(userinfo["name"])

//updating name
userinfo["name"]="VANSHIKA"
console.log(userinfo["name"])
