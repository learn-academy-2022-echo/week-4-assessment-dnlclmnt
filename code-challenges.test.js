// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shufflerFun", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(shufflerFun(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shufflerFun(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// GOOD FAIL  ./jest.test.js
// shufflerFun
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

// ● shufflerFun › takes in an array, removes the first item from the array and shuffles the remaining content

//   ReferenceError: shufflerFun is not defined

// b) Create the function that makes the test pass.

// create empty result array that will be returned
// use slice method to create a new result array that returns the passed in array without the first index
// iterate through new array in reverse (Fisher-Yates algorithm)
// create a random number that will have a max value of the end of our new array
// create a temp variable that will save the item in the array at the current iteration
// the item in the fixed array at current index will equal the item in the fixed array at the index of the random number generated
// the item in the fixed array at the random index will be equal to the temp variable
    // this allows us to swap positions for the items in our array


const shufflerFun = (arr) => {
    let fixedArr = arr.slice(1)

    for (let i = fixedArr.length - 1; i > 0; i--) {
        let randomNum = Math.floor(Math.random() * i + 1) // by setting the randomNum to be multiplied by i, we can ensure that the maximum value for the random num will never be greater than the number of items in our array.
        let temp = fixedArr[i] // current element to be stored temporarily
        fixedArr[i] = fixedArr[randomNum] // swap positions
        fixedArr[randomNum] = temp // swap positions
    }
    return fixedArr
}

// PASS  ./jest.test.js
// shufflerFun
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("votingMachine", () => {
    it("takes in an object that contains upvotes and downvotes, returning a net total of votes", () => {
        expect(votingMachine(votes1)).toEqual(11)
        expect(votingMachine(votes2)).toEqual(-31)
    })
})

// GOOD FAIL  ./jest.test.js
// shufflerFun
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// votingMachine
//   ✕ takes in an object that contains upvotes and downvotes, returning a net total of votes (3 ms)

// ● votingMachine › takes in an object that contains upvotes and downvotes, returning a net total of votes

//   ReferenceError: votingMachine is not defined


// b) Create the function that makes the test pass.

// Create a function that takes in an object
// Object will have keys of 'upVotes' and 'downVotes' with numbers as their values
// create a result variable set to 0
// upvote values will be added to result
// downvote values will be subtracted from result
// return result

const votingMachine = (obj) => {
    let result = 0
    const {upVotes, downVotes} = obj
    result = result + upVotes
    result = result - downVotes
    return result
}

// PASS  ./jest.test.js
// shufflerFun
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// votingMachine
//   ✓ takes in an object that contains upvotes and downvotes, returning a net total of votes (1 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

describe("noDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDupes(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// GOOD FAIL  ./jest.test.js
// shufflerFun
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// votingMachine
//   ✓ takes in an object that contains upvotes and downvotes, returning a net total of votes (1 ms)
// noDupes
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: noDupes is not defined


// create a function that takes in two arrays as arguments, return will be one array with no duplicate values
const noDupes = (arrOne, arrTwo) => {
    // create an array that concatenates both arrays together -- we can then iterate over the length of this combined array
    let bothArr = arrOne.concat(arrTwo)
    // create an empty result array to push our unique values into
    let result = []
    // iterate over the length of the combined array, starting at 0
    for (let i = 0; i < bothArr.length; i++) {
        // conditional statement - if the index of the current value is strictly equal to the current index... (use indexOf method on the concatenated array. indexOf will always return the FIRST index found of the value, if it exists in the array)
        if (bothArr.indexOf(bothArr[i]) === i) {
            // push current value into the result array
            result.push(bothArr[i])
        }
    }
    // return result array
    return result
}

// PASS  ./jest.test.js
// shufflerFun
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// votingMachine
//   ✓ takes in an object that contains upvotes and downvotes, returning a net total of votes (1 ms)
// noDupes
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.488 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.99s.