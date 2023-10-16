/*
Have the function ArrayChallenge(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
 */

function ArrayChallenge(arr) {
    const n = arr.length;
    const lis = new Array(n).fill(1); // Initialize LIS array with 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    return Math.max(...lis); // Return the maximum value in the LIS array
}

// Example usage:
const arr = [4, 3, 5, 1, 6];
const result = ArrayChallenge(arr);
console.log("Length of the longest increasing subsequence: " + result);
