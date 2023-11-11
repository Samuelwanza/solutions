console.log("We are going to print all numbers divisible by 6 and 12 beween 1 and 100")

const sixTwelveDivisibilityTest=()=>{
    for (var i=1;i<=100;i++){
        if(i%6===0 && i%12===0){
            console.log(`${i} is disible by 6 and 12`)
        }
    }
}
sixTwelveDivisibilityTest()

console.log("We are going to print all numbers that have a perfect square root bewwen 1 and 100")

const perfectSquareRoot=()=>{
    for (var i=1; i<=100;i++){
        var perfectnumber=i*i
        if(perfectnumber<=100)
        console.log(`${perfectnumber} is a perfect square`)
    }
}
perfectSquareRoot()

console.log("Lets try logarithms of numbers until 100 to base 10")
const logarithms=()=>{
    for(var i=1; i<=100;i++){
        var log=i/10
        console.log(`The log of ${i} is ${log}`)
    }
}
logarithms()

