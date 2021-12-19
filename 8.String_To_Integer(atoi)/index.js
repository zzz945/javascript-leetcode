/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = null
    let num = null

    for(let i = 0; i < s.length; i++) {
      const c = s[i]

      // begin number
      if (num === null && sign === null)  {
        if (c === " ") {
          continue
        } 
        
        if (c === "-") {
          sign = -1
          continue
        } 

        if (c === "+") {
          sign = 1
          continue
        }
      }

      // end number
      if (!/[0-9]/.test(c)) {
        break
      }

      // out of range
      const n = +c

      const boundry = sign === -1 ? 2147483648 : 2147483647
      if (num > (boundry - n)/10) {
        num = boundry
        break
      }

      num = (num || 0) * 10 + (+c)
    }

    return num !== null ? num * (sign || 1) : 0
};

console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log("end")
