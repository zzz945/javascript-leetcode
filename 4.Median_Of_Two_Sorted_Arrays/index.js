/**
 * Intuitively thinking, I can just merge the two arrays first and the median can be found easily, but the time 
 * complexicity would be O(m+n) on the cost of merging two sorted arrays, which doesn't meet the requirement of 
 * the question.
 * 
 * The time restrict O(log(m+n)) reminds me of binary search and I spent some time thinking about how to apply it 
 * to this specific case, which is not as easy as I am explaining it now. We can just cut the shorter array into half and 
 * then find a cut in the longer one so that the total number of the left parts of the two arrays is half of the total length 
 * of the them. Then we can decide if the two cuts are exactly the position where the median is, if not, we cut the 
 * left or right part(based on inequality of the numbers around the cuts) of shorter array and culculate the cut position 
 * in the longer arary again until we find the median .
 * 
 * The time complexicity is O(min(m, n)) since we apply binary search to the short array and the space complexcity is 01 
 * since no extra space is needed.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n1 = nums1.length
  const n2 = nums2.length
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1)

  const total = n1 + n2
  const half = Math.floor(total / 2)

  let idxL = 0, idxR = n1 - 1;

  while (true) {
    const mid1 = Math.floor((idxL + idxR) / 2)
    const mid2 = half - (mid1 + 1) - 1

    const l1 = typeof nums1[mid1] !== "undefined" ? nums1[mid1] : -Infinity
    const r1 = typeof nums1[mid1 + 1] !== "undefined" ? nums1[mid1 + 1] : Infinity
    const l2 = typeof nums2[mid2] !== "undefined" ? nums2[mid2] : -Infinity
    const r2 = typeof nums2[mid2 + 1] !== "undefined" ? nums2[mid2 + 1] : Infinity

    if (r1 >= l2 && r2 >= l1) {
      return total % 2 !== 0 ? Math.min(r1, r2) : (Math.max(l1, l2) + Math.min(r1, r2)) / 2
    } else {
      if (l1 > r2) {
        idxR = mid1 - 1
      } else {
        idxL = mid1 + 1
      }
    }
  }
};

// let a = findMedianSortedArrays([1,3], [2]) // 2 
// console.log(a)
a = findMedianSortedArrays([2], []) // 2 
console.log(a)
