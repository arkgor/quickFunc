function returnLongestSubsequent(str1, str2) {
  return getLongest(getRepeatableSequents(str1.slice(''), str2.slice(''))).join('')

  function getSuequent(s1, s2, acc = []) {
    if (!s1.length) return acc
    acc = acc.slice()
    const first = s1[0]
    let restS2 = s2.slice()
    for (let i = 0; i < s2.length; i++) {
      if (first === s2[i]) {
        acc.push(first)
        restS2 = s2.slice(i + 1)
        break
      }
    }
    return getSuequent(s1.slice(1), restS2, acc)
  }

  function getRepeatableSequents(str1, str2, acc = []) {
    if (!str1.length) return acc
    acc.push(getSuequent(str1, str2))
    return getRepeatableSequents(str1.slice(1), str2, acc)
  }

  function getLongest(arr) {
    return arr.sort((p, n) => (n.length > p.length ? 1 : -1))[0]
  }
}

// returnLongestSubsequent("ABAZDC", "BACBAD"); // ABAD
console.log(returnLongestSubsequent('AGGTAB', 'GXTXAYB')) // GTAB
// returnLongestSubsequent("aaaaa", "aa"); // aa
