//array-copy operations crate shallow copies
const name1=["ROHAN","LATTU","JOON"]
const name2=["ISHIKA","ISHU","ISHI"]

const names=name1.concat(name2)
console.log(names)
const namess=[...name1,...name2]//spread
console.log(namess)

const array=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const flattenedarray=array.flat(Infinity)//give depth inside the paranthesis
console.log(flattenedarray)

console.log(Array.isArray("ISHIKA"))
console.log(Array.from("ISHIKA"))
console.log(Array.from({name:"ISHIKA"}))//Array.from() is typically used to 
                                        // create an array from array-like or 
                                        // iterable objects, 
//output->[]
console.log(Object.entries({ name: "ISHIKA" })); // [["name", "ISHIKA"]]


let score1 = 100
let socre2 = 200
let score3 = 300

console.log(Array.of(score1, socre2, score3))