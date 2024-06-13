function removeDuplicate(arr){
//    let newArr = [];
//    for(let i=0; i<arr.length; i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
//    }
//    console.log(newArr)

// let newArr = arr.reduce((acc,curr)=>{
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc;
// },[])
//   console.log(newArr)

   let newArr = arr.filter((a,b)=> arr.indexOf(a) !== b)
   console.log(newArr)
}
let arr = [1,2,2,3,5,6,3]
console.log(arr.indexOf(3))
removeDuplicate([1,2,2,3,5,6,3])