const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'PUBG'
}

// for (const [key,value ] of myobj) {
//     console.log(key,":-",value) //myobj is not iterable
    
// }

//forin loop for objects

for (const key in myobj) {
   // console.log(key)
    console.log(`${key} is for ${myobj[key]}`)
}

const languages = ["js", "ruby", "java", "python", "cpp"]
languages.forEach(function (item){//callback function and no function name is given or assigned
    console.log(item)
})

languages.forEach((item)=>{
    console.log(item)
})

const coding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename : "java"
    },
    {
        languagename : "cpp",
        languagefilename : "c++"
    }
]

coding.forEach( (item) => {
    console.log(item.languagename)//iterating over objects inside the array
} )