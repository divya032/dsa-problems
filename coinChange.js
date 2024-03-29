/**You are given coins of different denominations and a total amount of money. Write a function to compute the number of
* combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
* Example 1:

*Input: amount = 5, coins = [1, 2, 5]
* Output: 4
* Explanation: there are four ways to make up the amount:
* 5=5
* 5=2+2+1
* 5=2+1+1+1
* 5=1+1+1+1+1
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let table = Array(amount+1).fill(0);
  table[0] = 1; 
  
   for (let coin of coins) {
        for (let i = coin; i <=amount; i++) {
            table[i] += table[i - coin];
        }
    }
  
 return table[amount]; 

}
