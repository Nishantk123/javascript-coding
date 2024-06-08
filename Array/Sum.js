function sum (arr){
    let add= 0;
    for (let i=0 ; i<arr.length ;i++){
        add= add+ arr[i]
    }
    return add
}
console.log(sum ([1,2,3]))