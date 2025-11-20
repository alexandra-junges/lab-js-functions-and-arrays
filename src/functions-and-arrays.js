// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1
    } else {
        return num2
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if(wordsArray.length === 0) {
        return null
    }

    let longestWord = "";
    for(let i=0; i < wordsArray.length; i++) {
        if(longestWord.length < wordsArray[i].length){
            longestWord = wordsArray[i]
        } 
    }
    return longestWord
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArray) {
    if(numArray.length === 0) {
        return 0
    }

    let sum = 0;

    for(let i=0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray2) {
    if(numArray2.length === 0) {
        return 0
    }

    let sum2 = 0;

    for(let i=0; i < numArray2.length; i++) {
        sum2 += numArray2[i];
    }
    
    const average = sum2 / numArray2.length
    return average;

    /*Another way*/
    // const total = sumNumbers(numArray2)
    // const average = total / numArray2.length
    // return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if(arrayOfWords.length === 0) {
        return null
    }

    for(let i=0; i < arrayOfWords.length; i++) {
        if(arrayOfWords[i] === wordToSearch) {
            return true
        } 
    }
    return false
}
