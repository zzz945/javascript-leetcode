/**
Intuitively thinking, I could use two loops, in the outer one I can get the first character of the 
substring and the inner one end until the substring contains duplicate letters. I use hashmap to check 
if a letter is already included and I need to keep track of the max length of the substring. In this way, 
the timecomplexcity would be O(n2) since there are two loops and the space complexcity would be O(n) on 
the cost of the hashmap.

Sliding window is commonly used to solve string problem. Particularly in the case, it could be used to 
replace the second loop in my first solution, so that I can calculate the length of the substring without 
counting from start. So the time complexcity is reduced to O(n) since only one loop exists and the space 
complexicity remains O(n).
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const arr = Array.from(s)
  
  const mp = new Map()
  let curLength = 0
  let max = 0
  let i = 0
  let j = 0
  
  while(j < arr.length) {
      const c = arr[j]
      if (mp.get(c)) {
         mp.delete(arr[i])
         i++
         curLength--
      } else {
         mp.set(c, true)
         curLength++
         max = Math.max(max, curLength)
         j++
      }        
  }
  
  return max
};