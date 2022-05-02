function printSum(){
    console.log([5 + 10 + 15])
}
printSum()
//NUMBER2
//a
let Alice = [0, 1, 2]
let Bob = [0, 1, 2]
if (Alice[0] > Bob[0]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[0] < Bob[0]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[0] === Bob[0]){
    console.log('null')
}
else{
    console.log('1point')
}

//b

if (Alice[1] > Bob[1]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[1] < Bob[1]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[1] === Bob[1]){
    console.log('null')
}
else{
    console.log('1point')
}

//c

if (Alice[2] > Bob[2]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[2] < Bob[2]){
    console.log('1point')
}
else{
    console.log('null')
}
if (Alice[2] === Bob[2]){
    console.log('null')
}
else{
    console.log('1point')
}

//NUMBER3
//a
let arrayOfIntegers = [3, -9, 15, 0, 50, -50, 0, -1, 0, 27];
let positiveIntegers = [3, 15, 50, 279];
let numberOfPostiveIntegers = [4];
let totalPositiveIntegers = arrayOfIntegers[0] + arrayOfIntegers[2] + arrayOfIntegers[4] + arrayOfIntegers[9];
let ratioOfPositiveIntegers = numberOfPostiveIntegers / totalPositiveIntegers;
console.log(ratioOfPositiveIntegers)

//b
let negativeIntegers = [-9, -50, -1];
let numberOfNegativeIntegers = [3];
let totalNegativeIntegers = arrayOfIntegers[1] + arrayOfIntegers[5] + arrayOfIntegers[7]
let ratioOfNegativeIntegers = numberOfNegativeIntegers / totalNegativeIntegers
console.log(ratioOfNegativeIntegers)

//c
let zeroIntegers = [0, 0, 0];
let numberOfZeroIntegers = [3];
let totalZeroIntegers = arrayOfIntegers[3] + arrayOfIntegers[6] + arrayOfIntegers[8]
let ratioOfZeroIntegers = numberOfZeroIntegers / totalZeroIntegers
console.log(ratioOfZeroIntegers)

//NUMBER4

function firstFunction(number){
    return number + number
}
firstFunction(8)
console.log(firstFunction(8))
