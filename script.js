const findMissing = (arr) => {
  arr = arr.sort(); // [0,1,2,3,4,6,7,8,9]
  // edge cases
  if(arr[arr.length - 1] !== 9) console.log(` ${"9"}`)
  if (arr[0] === 1) console.log(`  ${"0"}`);
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      console.log(`${[arr[i] + 1]}`);
    } else {
    }
  }
};
findMissing([2, 4, 3, 1, 6, 8, 7, 0, 5]);

// T(O(nlogn))
// S(O(1))

const findMissing3 = (arr) => {
 let totalSum = arr.length * ((arr.length+1)/2)
 let sum = 0
  for(let i =0; i<arr.length; i++) {
    sum += arr[i]
}
console.log(totalSum-sum)
};
findMissing3([2, 4, 3, 1, 6, 0, 7, 9, 5]);

// T(O(n))
// S(O(1))



const noOfBoxes = (arr, len)=>{  // [17,3,4,16]
    let lenLeft = len; 
    let boxUsed = 1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > lenLeft){
            boxUsed++;
            lenLeft = len - arr[i];
        }else
            lenLeft -= arr[i];
        
    }
    console.log(boxUsed)
}

noOfBoxes([17,3,12,8,3,13,4,7,19,1],20);


// T(O(n))
// S(O(1))

