// const tinderuser = new Object() //singleton object

const tinderuser = {} //nonsingleton object
tinderuser.id = "1234ghdj"
tinderuser.name = "dcjdfjs"
tinderuser.loggedin = true

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

// console.log(tinderuser)
const regularuser = {
    email : "dskk@gmail.com",
    fullname : {
        firstname : "ISHIKA",
        lastname : "NEGI"
    }
}
console.log(regularuser.fullname)

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4)

