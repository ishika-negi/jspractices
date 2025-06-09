function adding(number1,number2){
    console.log(number1+number2)
}
adding(5,7)

function adding1(number4,number5){
    if((typeof number4)==(typeof number5)){
        console.log(number4+number5)
    }
    else{
        console.log("Cannot be added")
    }
}
adding1("a",12)
adding1("a","b")
adding1(8,2)

function multiply(number1,number2){
    return number1*number2

}
result=multiply(5,2)
console.log("result : ", result)

function loginusermessage(username = "rohan"){//default value
    if(!username){
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage("ishika"))