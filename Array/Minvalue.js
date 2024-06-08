function minvlue(arr){
    let min = arr[0];
    for (let i = 0 ; i< arr.length ; i++){
        if(arr[i] < min){
            min=arr[i]
        }
    }
    return min
}
console.log(minvlue([12,3,45]))