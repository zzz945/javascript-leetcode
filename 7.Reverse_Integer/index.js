/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x > 0 ? 1 : -1

  const absStr = Math.abs(x) + ""
  let total = 0
  for(let i = absStr.length - 1; i >= 0 ; i--) {
    const max = sign > 0 ? 2147483647 - total : 2147483648 - total
    const num = +absStr[i]
    if (num > max) return 0
    total += num * Math.pow(10, i)
  }

  return total * sign
};

console.log(reverse(-123))
