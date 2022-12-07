
const array = [1,2,3,4]

let array2 = [...array, 5]

const array3 = array2.map(function(num){
    return num * 2;
})

const array4 = array3.map(function(num){
    return num -1;
})

console.log(array)
console.log(array2)
console.log(array3)
console.log(array4)
