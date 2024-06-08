function secondlarge(arr){
    let second=0;
    let largest =0;
    for (let num of arr){
        if (num>largest){
            second = largest
            largest = num
        }
        else if(num> second && num !== largest){
            second = num
            
        }
    }
    return second
} 
console.log(secondlarge([12,11,23,25,4]))