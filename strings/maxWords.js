
// QUESTION 3: Find Sentence with Maximum Number of Words
// ========================================================
//
// PROBLEM STATEMENT:
// Given a string S containing a paragraph separated by punctuation marks 
// (comma ',', period '.', question mark '?', or exclamation mark '!'), 
// find the sentence that contains the maximum number of words.
//
// A word is a sequence of non-space, non-punctuation characters.
// Return the maximum number of words in any sentence.
//
// SAMPLE INPUT 1:
// "Hi, how are you? I am fine! Thank you."
//
// SAMPLE OUTPUT 1:
// 4
//
//


const maxWords = (str) => {
  let max = 0;
  let count = 0;

  for(const char of str) {
    if(char == ' ') {
      count++;
    }
    if(char == '.' || char == '?'|| char == '!') {
      count++;
      max = Math.max(max, count);
      count = 0;
    }
  }
  return max;
}

console.log(`max words:`, maxWords("Hi, how are you? I am fine! Thank you."
))
