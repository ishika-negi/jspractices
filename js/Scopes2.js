function one(){
    const username = "ishika"
    function two(){
        const website = "YouTube"
        console.log(website)
        console.log(username)
    }
    // console.log(website)-> error because out of scope
    two()
}
one()

console.log(addone(5))//prints even f the function is declared later
function addone(num){
    return num+1
}


// console.log(addtwo(5))//error if did the same here
// const addtwo = function(num){
//     return num+2
// }