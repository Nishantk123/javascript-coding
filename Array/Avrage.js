function avrage (arr){
    let sum = 0;
    let avrages = 0;
    for (let i=0 ; i< arr.length ; i++){
        sum= sum + arr[i];
        avrages=sum/arr.length
    }
    return avrages
}
console.log(avrage([1,2,3]))