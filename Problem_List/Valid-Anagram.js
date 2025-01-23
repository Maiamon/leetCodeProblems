class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
      if(s.length != t.length) return false

      const map = new Map()

      for (const c of s) {
        if (map.has(c)) {
          map.set(c, map.get(c) + 1)
        } else {
          map.set(c, 1)
        }
      }

      for (const c of t) {
        if (map.has(c) && map.get(c) > 0) {
          map.set(c, map.get(c) - 1)
        } else {
          return false
        }
      }

      return true
  }
}
