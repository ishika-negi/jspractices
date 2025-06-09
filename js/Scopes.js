var c = 300 
let a =300
if(true){
    let a = 10
    const b = 20
    var c = 30 // same prblm if c = 30
    //c=30
    console.log("INNER : ",a)
}
console.log(a)
//console.log(b)
console.log(c)//it is printing c outside the scope