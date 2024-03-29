/**Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, 
** with the colors in the order red, white and blue.Here, we will use the integers 0, 1, and 2 to represent the color red,
** white, and blue respectively.

* Note: You are not suppose to use the library's sort function for this problem.

* Example:
* Input: [2,0,2,1,1,0]
* Output: [0,0,1,1,2,2]




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
let  noOftwos = nums.filter(n => n === 2 ).length;
 
 for(let i=0; i<=nums.length-1; i++){
     if(nums[i]=== 0){
         nums.splice(i,1);
         nums.unshift(0);
     } else if(nums[i] === 2) {
         nums.splice(i,1);
         nums.push(2);
        noOftwos--;
         if(noOftwos >= 0){
             i--;
         }
        
     }
 }
