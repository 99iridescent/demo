function mySort(arr) { 
    if (arr.length<=1) {
        return arr;
    }
    let middle =arr.splice(parseInt(arr.length/2),1)
    let left = [], right = []
    arr.forEach(item => {
        item>middle ? right.push(item) : left.push(item)
    });
    return mySort(left).concat(middle,mySort(right))
} 
var ar=[565,77,89,45,34,12,65,31,121];
var new_ar = mySort(ar)
console.log(new_ar)