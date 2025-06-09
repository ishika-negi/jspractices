function calculatecartprice(val1,val2,...num1){//rest operator -> can pass as many values we want
    return num1
    //returns array of all the values

    //val1=100
    //val2=200
    //rest in num1
    
}
console.log(calculatecartprice(100,200,300,500))

const user1={
    username : "ishika",
    age : 19,
    
}
const user2={
    username: "vanshika",
    age : "17"

}

function handleobj(anyobj){
    console.log(`hello ${anyobj.username} your age is ${anyobj.age}.`)
}
handleobj(user1)
handleobj(user2)
handleobj({
    username : "Rohan",
    age : 21
})

const arr=[10,20,30,40,50]
function arrayelement(array){
    return array[0]
}
console.log(arrayelement(arr))
console.log(arrayelement([70,80,90]))
