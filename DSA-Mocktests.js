Q-1 Find the Median

function findMedian(arr) {
 let strArr = arr.sort((a,b)=>a-b);
 let mid = Math.floor(strArr.length /2);

 if(strArr.length % 2 === 0){
 return (strArr[mid-1] + strArr[mid]) /2
 }
 return strArr[mid]
}



Q-2 Flipping the Matrix 


function flippingMatrix(matrix) {
 let max = 0;
 let n = matrix.length/2;
 let total = 0;
 for(let row = 0; row < n; row++){
 for(let col = 0; col < n; col++){
 max = Number.MIN_VALUE
 max = Math.max(matrix[row][col],max); // upper left [0,0]
 max = Math.max(matrix[row][2 * n - col -1],max); // upper right
[0,1]
 max = Math.max(matrix[2 * n -row -1][col],max); // lower left
[1,0]
 max = Math.max(matrix[2 * n - row -1][2 * n - col -1],max); //
lower right [1,1]
 
 total += max
 }
 }
 return total
}
