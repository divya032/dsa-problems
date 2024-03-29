/**
 * Given an array w of positive integers, where w[i] describes the weight of index i, 
 * write a function pickIndex which randomly picks an index in proportion to its weight.
 * Note:
 * 1 <= w.length <= 10000
 * 1 <= w[i] <= 10^5
 * pickIndex will be called at most 10000 times.

 * Example 1:
 * Input:["Solution","pickIndex"]
 * [[[1]],[]]
 * Output: [null,0]
 * Example 2:
 * Input:
 * ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
 * [[[1,3]],[],[],[],[],[]]
 * Output: [null,0,1,1,1,0]

 * Explanation of Input Syntax:
 * The input is two lists: the subroutines called and their arguments.Solution's constructor has one argument, the array w. 
 * pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.
 */
 
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let arr = [];
    arr[0] = w[0];
  for(let i=1; i<w.length; i++){
        arr[i] = w[i] + arr[i-1];
  }
  this.arr = arr;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let length = this.arr.length;
    let r = Math.floor(Math.random() *(this.arr[length-1])) + 1;
    
    let start = 0, end = length - 1;
   
        while (start <= end) {
            let mid = Math.floor((start + end)/2);
            if (this.arr[mid] == r) {
                return mid;
            } else if (this.arr[mid] > r) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
        return start;

    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
