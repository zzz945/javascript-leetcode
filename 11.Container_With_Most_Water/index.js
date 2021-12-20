/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let l = 0;
    let r = height.length - 1
    while (l !== r) {
      const lh = height[l]
      const rh = height[r]
      max = Math.max(max, (r - l) * Math.min(lh, rh))
      if (lh > rh) r--
      else l++
    }

    return max
};

