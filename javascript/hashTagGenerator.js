// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashTag (str) {
    let newArray = str.split(" ")
    // gotta split first 
    let newHashTag = "#"
    // first condition
    // temperary new hash to return at the end
    newArray.forEach((word) => {
      newHashTag = newHashTag + word.charAt(0).toUpperCase() + word.slice(1)
      // add each word with capitalized first letter
      // second condition
    }) 
    if (newHashTag.length > 140) {
        // third condition
      return false 
    } else if (newHashTag.length == 1) {
        // fourth condition
      return false 
    } else {
        // final return value if not false
      return newHashTag  
    }
}


function testingUnit(stringInput, expectedOutput) {
    if (expectedOutput == generateHashTag(stringInput)) {
        console.log("Test PASSED for " + stringInput)
    } else {
        console.log("Test FAILED for " + stringInput)
    }
}

testingUnit("", false);
testingUnit(" ".repeat(200), false);
testingUnit("Do We Have A Hashtag" , "#DoWeHaveAHashtag");
testingUnit("Codewars", "#Codewars");


