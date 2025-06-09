const coding = ["js", "ruby", "java", "cpp"]
const values = coding.forEach((item)=>{
    return item
})
 console.log(values)//forEach loop does not return values

const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynum.filter((num) => num > 4)
console.log(newnums)

const newnums1 = mynum.filter((num) =>{
    return num > 4//if using {}then return is necessary
} )
console.log(newnums1)


const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//map is also a callback function
// // const newnums2 = mynumbers.map((num) => num+10)
// // console.log(newnums2)

const newnums2 = mynumbers.map((num) => num*10).map((num) => num+1).filter((num) => num >= 40)
console.log(newnums2)

const mynums = [1, 2, 3]
// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0)
// console.log(mytotal) 
const mytotal = mynums.reduce((acc,curr) => acc+curr,0)//0 is for value of the accumulator
console.log(mytotal) 