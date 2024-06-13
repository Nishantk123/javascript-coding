// function reverse(arr){
//     let newArr = [];
//     for(let i=arr.length-1; i>=0; i--){
//        newArr += arr[i] 
//     }
//     return newArr;
//  }
//  console.log(reverse([5,9,7,6,3,1]));

        // find max value
    //  function Max(arr){
    //     let largest = 0;
    //     for(let i=0; i<=arr.length; i++){
    //         if(arr[i] > largest){
    //             largest = arr[i]
    //         }
    //     }
    //     return largest;
    //  }
    //  console.log(Max([5,9,7,6,3,1]))

          //find minimum value
        //   function Min(arr){
        //     let smallest = arr[0];
        //     for(let i=0; i<=arr.length; i++){
        //         if(arr[i] < smallest){
        //             smallest = arr[i]
        //         }
        //     }
        //     return smallest;
        //   }
    //   console.log(Min([5,9,7,6,3,1,8]))1q`

          // find sum of numbers in array
        //   function Sum(arr){
            // let sum = 0;
            // for(let i=0; i< arr.length; i++){
            //     sum += arr[i]
            // }
            // return sum;
        //     let sum = arr.reduce((acc,curr)=>{
        //           acc += curr
        //     },0)
        //     return sum;
        //   }
        //   console.log(Sum([5,9,7,6,3,1,8]))

              // Average of element
            //   function Average(arr){
            //     let sum= 0;
            //     for(let i=0; i<arr.length; i++){
            //         sum += arr[i]
            //     }
            //     return sum/arr.length
            //   }
            //   console.log(Average([5,8,3,7,6]))

                //remove duplicate
            // function removeNum(arr,num){
            //     let newArr = [];
            //     for(let i=0; i<arr.length; i++){
            //      if(num !== arr[i]){
            //         newArr.push(arr[i])
            //      }
            //     }
            //     return newArr;
            // }
            // console.log(removeNum([8,2,6,4,2,3],2))

              // find second largest number
            // function secLargest(arr){
            //     let largest = 0;
            //     let sec_large = 0;
            //     for(let i=0; i<arr.length; i++){
            //         if(arr[i] > largest){
            //            sec_large = largest  
            //            largest = arr[i]
            //         }else if(arr[i] > sec_large && arr[i] !== largest){
            //             sec_large = arr[i]
            //         }
            //     }
            //     return sec_large;
            // }
            // console.log(secLargest([8,2,6,4,2,3]))
  
                // find second smallest number
            // function secSmallest(arr){
            //     let smallest = Infinity;
            //     let sec_small = Infinity;
            //     for(let i=0; i<arr.length; i++){
            //         if(arr[i] < smallest){
            //             sec_small = smallest
            //             smallest = arr[i]
            //         }else if(arr[i] < sec_small && arr[i] !== smallest){
            //             sec_small = arr[i]
            //         }
            //     }
            //     return sec_small;
            // }
            // console.log(secSmallest([8,2,6,4,2,3]))

                  // count even number in an array
            // function Even(arr){
            //     let newArr = [];
            // for(let i=0; i<arr.length; i++){
            //     if(arr[i] % 2 == 0){
            //         newArr.push(arr[i])
            //         }
            //       console.log(newArr,newArr.length, "number is even")  
            // }
            // }
            // Even([5,6,8,1,2,3]);

                 // count odd number in an array
            // function Odd(arr){
            //     let newArr = [];
            // for(let i=0; i<arr.length; i++){
            //     if(arr[i] % 2 !== 0){
            //         newArr.push(arr[i])
            //         }
            //       console.log(newArr,newArr.length, "number is odd")  
            // }
            // }
            // Odd([5,6,8,1,2,3]);

           