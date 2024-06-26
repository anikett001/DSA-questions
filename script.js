Q-1
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

Q-2 Intersection of Two Arrays

var intersection = function(nums1, nums2) {
    let res = [];
    for(let nums of nums1){
        if(nums2.includes(nums)){
            res.push(nums)
        }
    }
    return [...new Set(res)]
};


Q-3 Intersection of Two Arrays II  (L-350)
var intersect = function(nums1, nums2) {
     let res = [];
    if(nums1[0]== nums2[0]) res.push(nums1[0],nums2[0])
    for(let nums of nums1){
        if(nums2.includes(nums)){
            res.push(nums)
        }
    }
    return res
};


Q-4 Find the duplicate Number (L-287)

let findDuplicate = function(nums) {
if(nums[0] == nums[1]) return nums[0]
let set = new Set();
for(let num of nums){
    if(set.has(num)) return num;
    set.add(num)

    }
};


Q-5 Next Greater Element I  (L-496)


var nextGreaterElement = function(nums1, nums2) {
  let stack = [];
  let res = new Array(nums1.length);
  for(let i = nums2.length - 1;i >= 0;i--){
  while (stack.length && nums2[i] >= stack[stack.length -1]){
   stack.pop()
    }
    if (nums1.includes(nums2[i])){
    let index = nums1.indexOf(nums2[i]);
    if(stack.length){
        res[index] = stack[stack.length - 1]
        } else{
        res[index] = -1;
        }
    }
    stack.push(nums2[i])
  }  
  return res
};

Q-6 Slowest Key (L-1629)


let slowestKey = function(releaseTimes, keysPressed) {
  let  max = releaseTimes[0];
  let  char = keysPressed[0];
  for(let i = 1;i<releaseTimes.length;i++){
    if(releaseTimes[i]-releaseTimes[i-1] > max){
        max = releaseTimes[i]-releaseTimes[i-1];
        char = keysPressed[i]
    }else if(releaseTimes[i]-releaseTimes[i-1] == max && keysPressed[i] > char){
        char = keysPressed[i]
    }
  }  
  return char
};

Q-7 Set Matrix Zeroes (L-73)

const setZeroes = (matrix) => {
    // Creating two boolean matrix[i][0] = 0; firstRow / firstCol and setting them to false;
let firstRow = false;
let firstCol = false;

for(let i = 0;i<matrix.length;i++){
    for(let j = 0;j<matrix[0].length;j++){
        if(matrix[i][j] == 0){
            if( i == 0) firstRow = true;
            if( j == 0) firstCol = true;
            matrix[i][0] = 0;
            matrix[0][j] = 0;
        }
    }
}
for(let i = 1; i<matrix.length;i++){
    for(let j = 1; j< matrix[0].length; j++){
        if(matrix[0][j] == 0 || matrix[i][0] == 0){
            matrix[i][j] = 0
        }
    }
}
if(firstRow){
    for(let j = 0; j< matrix[0].length;j++){
        matrix[0][j] = 0
    }
}
if(firstCol){
    for(let i = 0; i< matrix.length;i++){
        matrix[i][0] = 0
    }
}
}
