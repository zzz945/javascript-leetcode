/**
 * The most intuitively way to solve this is to iterate every substring, check if it's palindrome and keep track 
 * of the max length. The time complexicity would be O(n3) since two loop are needed to find every substring
 * and one is needed for palindrome checking.
 * 
 * To improve over the brute force solution, I observed that palindrome strings are symatric, so it's not necessary to
 * check every substring. Consider the case "ababa". If we already knew that "bab" is a palindrome, it is obvious that 
 * "ababa" must be a palindrome since the two left and right end letters are the same. I implemented this by changing 
 * the way we did the second and third loop. Instead of finding every substring starting from i and check if it's palindrome,
 * I can check every substring centered around i and do palindrome checking. The time complexicity is reduced to 0(n2) since 
 * there isn't a loop for palindrome checking any more and the space complexicity remain 0(1)
 */

function longestPalindrome(s) {
  // ll: Left index of the longest palindrome.
  // rr: Right index of the longest palindrome.
  let ll = 0, rr = 0;

  // Iterate all palindromes with center indices
  for (let i = 0; i < s.length; i++) { 
    const [l, r] = expandAroundCenter(s, i)
    if (r-l > rr-ll) {
      ll = l
      rr = r
    }
  }
  return s.substring(ll, rr+1);
}

function expandAroundCenter(s, i) {
  // [..., i, ...] or [... i, i+1, ...]
  const [l1, r1] = _expandAroundCenter(s, i, i)
  const [l2, r2] = _expandAroundCenter(s, i, i + 1)
  return r1-l1 > r2-l2 ? [l1, r1] : [l2, r2]
}

function _expandAroundCenter(s, l, r) {
  let ll = 0, rr = 0;

  while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
    // Found a new palindrome [l, ..., i, j, ..., r]
    // Update the ll, rr if the newly found palindrome is longer than the
    // existing one.
    if (r-l > rr-ll) {
      ll = l
      rr = r
    }

    l--
    r++
  }

  return [ll, rr]
}

const a = longestPalindrome("abacd")
console.log(a)
