const user = {
    username : "Ishika",
    price : 999,

    welcomemessage : function(){
        //this function -> current context
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()//current context till here
user.username = "vanshika"
user.welcomemessage()//current context now

//console.log(this);output -> {}...node environment this
// is reffering to empty object because there is no context globally
//global object -> window object(interview)

// const school = () => {
//     let name = "DAV"
//     console.log(this.name)
// }
// school()

const addtwo = (num1,num2) => {
    return num1+num2//explicit return
}
console.log(addtwo(2,4))

const add2 = (num1,num2) => num1+num2//implicit return
console.log(add2(2,4))

const sum2=(n1,n2) => (n1+n2)
console.log(sum2(5,5))