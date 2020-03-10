// The first working version of the solution

function returnLongestSubsequent(str1, str2) {
  str1 = str1.split('')
  str2 = str2.split('')

  let subsequents = []

  // map over each character
  for(let i = 0; i < str1.length; i++) {
      let latestCharacterFoundAt = 0;
      let possibleSubsequent = [];

      // iterate over each character from str1 - starting from char under i index
      // to compare it with each str2 character
      // save index if characters matches
      // to not start iterating next character (from str1) from the beginning of (str2)
      for (let j = i; j < str1.length; j++) {
        for (let h = latestCharacterFoundAt; h < str2.length; h++) {
          if (str1[j] === str2[h]) {
            possibleSubsequent.push(str1[j])
            latestCharacterFoundAt = h + 1
            break;
          }
        }
      }
      if (!!possibleSubsequent.length) subsequents.push(possibleSubsequent)
  }

  if (!!subsequents.length) {
   return subsequents.sort((p, n) => n.length > p.length ? 1 : -1)[0].join("")
  }
}

// returnLongestSubsequent("ABAZDC", "BACBAD")
returnLongestSubsequent("AGGTAB", "GXTXAYB")
// returnLongestSubsequent("aaaaa", "aa")
