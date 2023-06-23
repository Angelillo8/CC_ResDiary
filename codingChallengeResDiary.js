/**
 * The function groupArrayElements() divides an array of elements and regroups it in another array.
 * Each division of the array will be of N length, and these will be the elements of the following array.
 * The final element of the result should have the length of the remainder if this is lower than N.
 * @example
 * // returns [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11 ] ]
 * @param {array} arrayToSlice - the array to be divided
 * @param {number} groupSize - the maximun size of the arrays
 * groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5);
 */


const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // Test array

var testNumber = 5 // Test number


const groupArrayElements = (arrayToSlice, groupSize) => {
    // Declarates the newArray
    let newArray = [] 
    // For loop which iterates through the elements of the array in a groupSize length.
    for (let i = 0; i < arrayToSlice.length; i += groupSize) { 
        // Declarates a temporary array to store the result of slicing the param arrayToSlice in a groupSize length
        const temporaryArray = arrayToSlice.slice(i, i + groupSize)
        // Pushes the temporary array into the newArray
        newArray.push(temporaryArray)
    }
    // Returns the result of the function, which is the nested array newArray
    return newArray
}

const testResult = groupArrayElements(testArray, testNumber) // Test result array 

console.log(testResult) // Shows up the the result of the test in the terminal