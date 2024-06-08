function secondsmallest (arr){
    let somallest = Infinity;
    let second  = Infinity ;
    for (let i=0 ; i < arr.length ; i++){
        if (arr[i]<somallest){
            second = somallest;
            somallest=arr[i]
        }else if (arr[i]< second && arr[i]!==somallest){
         second=arr[i]   
        }
    }
    return second
}
console.log(secondsmallest([12,4,3,11]))