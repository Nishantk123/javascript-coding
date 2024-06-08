function evenno (arr){
    let count = 0 
  let even = arr.filter ((d)=>{
      return d%2 ===0
      
  })
     count =even.length 
      return count
  }
  console.log(evenno([2,3,4,5,6]))