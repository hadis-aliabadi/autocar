export function sameImage(str1, str2) {
    // Get the lengths of the strings
    const len1 = str1.length;
    const len2 = str2.length;
  
    // If the lengths are not the same, the strings are not similar
  
  
    // Iterate from the end of the strings and compare characters
    for (let i = 0; i < 20; i++) {
      if (str1[len1 - 1 - i] !== str2[len2 - 1 - i]) {
        return false; // Characters are not the same, strings are not similar
      }
    }
  
    // All characters are the same from the end, strings are similar
    return true;
  }
  