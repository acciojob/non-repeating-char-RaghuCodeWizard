function firstNonRepeatedChar(str) {
  // Create an object to store the character count
  const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
	

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If there are no non-repeated characters, return null
  return null;
}

