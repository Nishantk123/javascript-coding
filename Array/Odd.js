function oddno(arr){
    let count = 0 
  let odd = arr.filter ((d)=>{
      return d%2 !==0
      
  })
     count =odd.length 
      return count
  }
  console.log(oddno([2,3,4,5,6]))