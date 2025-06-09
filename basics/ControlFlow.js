const isuserloggedin = true
const temperature = 41

if(temperature === 40){
    console.log(" less equal to 40")
}
else{
    console.log( " Temperature is less than or greater than 40 ")
}
console.log(" Executed ")

const score = 200

if(score > 100){
    const power = "fly"
    console.log(` user power : ${power}`)
}

const balance = 1000
if (balance > 500) console.log("test"); 

const userloggedin = true
const debitcard = true


if(userloggedin && debitcard){
    console.log("Allow user")
}

if (userloggedin || debitcard){
    console.log(" user is allowed ")
}

const month = 3
switch (month) {
    case 1 :
        console.log("january")
        break
    case 2 :
        console.log("feburary")
        break
    case 3 :
        console.log("march")
        break
    case 4 :
        console.log("december")
        break
    default:
        console.log("default case")
        break
}
