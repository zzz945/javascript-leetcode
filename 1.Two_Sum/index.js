/**
The first way I thought of was just using two loops, which is the most simple one, and the time complexicity 
is 0(n2) and it is too slow. Then I came out a way to optimize it using hash map instead of the second loop. 
As we know, the time complexicity of finding an element from Hashmap is O(n), so the result of the optimization 
is very good, reducing time complexicity from O(n2) to 0(n). Regarding to the space complexicity, since the map 
is going to cost exactly the same space as the input numbers, so it is going to be O(n).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
  const mp = nums.reduce((acc, item, index) => {
      if (typeof acc[item] === "undefined") {
          acc[item] = index
      }  else { // same number uses a different key
          acc[`${item}_0`] = index
      }
      return acc
  }, {})
  
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const complement = target - num
      
      const complementIdx = complement !== num ? mp[complement] : mp[`${complement}_0`]
      
      if (typeof complementIdx !== "undefined") {
          return [i, complementIdx]
      }
  }
  
  return null
};