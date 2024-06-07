function reverse (arr){
    let reverses=[];
    for (let i=arr.length-1 ; i>=0;i--){
        reverses.push(arr[i])
    }
    return reverses
}
console.log(reverse([2,3,4,5,6]))