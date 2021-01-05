// Removes leading and trailing whitespaces and leaves a single whitespace
// between words. Also converts string to lower case.

// This is done so we can properly check for cached data with given search query / url.
// Since 'Avengers' is not the same as 'avengers' it will do another
// request even though it is in cache already.

function cleanString(string) {
  return string.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').toLowerCase();
}

export default cleanString;