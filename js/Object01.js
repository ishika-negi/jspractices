const mysymbol = Symbol("key1")

const user = {
    name : "ishika",
    email : "ishika@gmail.com",
    location : "Uttarakhand",
    [mysymbol] : "mykey1",
    "isloggedin" : "true",
    lastlogindays : ["Monday","Thursday"]

}

console.log(user.location)//not good because location at the end is a string 

//ex->
console.log(user["isloggedin"])//now it cannot be accesed by console.log(user.isloggedin)
console.log(user["lastlogindays"])
console.log(user[mysymbol])
console.log(typeof user[mysymbol])
console.log(typeof mysymbol)

user.greeting = function(){
    console.log("NAMASTE!")
}
user.greeting()

user.greeting2 = function(){
    console.log(`NAMASTE,${this.name}`)//String interpolation in JavaScript means
                   //  inserting variables or expressions directly 
                   // inside a string using template literals, which
                   //  are defined using backticks (`)
}
  user.greeting2()

//freezing
Object.freeze(user)
user.email="vanshika@gmail.com"
console.log(user["email"])
console.log(user)

