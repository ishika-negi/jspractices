for (let i = 0; i < 10 ; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best no")
    }
    console.log(element)
    
}

for ( let i = 0; i <= 10; i++){
    console.log(`outer loop value : ${i}`)
        for(let j =0; j <= 10;j++){
            console.log(`inner loop ${j} and outer loop ${i}`)
        
    }
}

for(let index =1; index <= 20; index++){
    if(index == 5){
        console.log("5 detected")
        break
    }
    console.log(`Value of i is ${index}`)
}

for(let index =1; index <= 10; index++){
    if(index == 5){
        console.log("5 detected")
        continue
    }
    console.log(`Value of i is ${index}`)
}