   

// function removeDuplicate(arr){
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

//    let newArr = arr.filter((a,b)=> arr.indexOf(a) !== b)
//    console.log(newArr)
// }
// let arr = [1,2,2,3,5,6,3]
// console.log(arr.indexOf(3))
// removeDuplicate([1,2,2,3,5,6,3])

// function Merge(arr1,arr2){
//     // let new_arr = arr1.concat(arr2)
//     let new_arr = [...arr1, ...arr2]
//     console.log(new_arr);
// }
// Merge([5,8,3,7],[7,9,4,2])

function Intersection(arr1,arr2){
       let newArr = arr1.filter(a=> arr2.includes(a))
       
//     let set1 = new Set(arr1)
//     let intercept = new Set();
//     for(let elem of arr2){
//         if(set1.has(elem)){
//             intercept.add(elem)
//         }
//     }
//     console.log([...intercept]);
       console.log(newArr);
}
Intersection([1,2,2,1],[2,2])

// function Union(arr1,arr2){
//     let newSet = new Set();
//     for(let elem of arr1){
//        newSet.add(elem) 
//     }
//     for(let elem of arr2){
//        newSet.add(elem) 
//     }
//     console.log([...newSet]);
// }
// Union([34,48,55],[34, 35, 45, 48, 49])

// function Differnece(arr1, arr2){
//     // let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let diff = arr1.filter(elem=> !set2.has(elem))
//     console.log(diff);
// }
// Differnece([2,5,4,7,3],[5,2,4,3])