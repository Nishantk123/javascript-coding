// function Sort( str){
//   let newArr = arr.sort((a,b)=>{
//     return a-b;
//   })
//   console.log(newArr)
// let newStr = str.split('').sort((a,b)=> a>b ? 1:-1).join('');
// console.log(newStr)

// }
// Sort([5,8,3,7,3,9])
// Sort("aman")

       //Bubble Sort
    //    function Bubble_Sort(arr){
    //     for(let i=0; i<arr.length; i++){
    //         for(let j=0; j<arr.length -i-1; j++){
    //             if(arr[j]>arr[j+1]){
    //                 let temp = arr[j]
    //                 arr[j] = arr[j+1]
    //                 arr[j+1] = temp
    //             }
    //         }
    //     }
    //     console.log(arr)
    //    }
    //    Bubble_Sort([6,9,8,3,4,2])

         // Insertion Sort
         function Insertion_Sort(arr){
            for(let i=0; i<arr.length; i++){
                let currentElement = arr[i];
                let lastIndex = i-1;
                console.log("inner",lastIndex,arr[lastIndex+1])
                while(lastIndex >= 0 && arr[lastIndex] > currentElement){
                    arr[lastIndex + 1] = arr[lastIndex]
                    lastIndex--;
                }
                console.log('outer',lastIndex)
                arr[lastIndex + 1] = currentElement;
            }
            console.log(arr)
         }
         Insertion_Sort([12,45,9,14,21,10])