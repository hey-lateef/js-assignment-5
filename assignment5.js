//Assignment 1 solution
function sumAsync(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        callback(result);
    }, 1000);
}

// Example usage:
sumAsync(10, 5, (sum) => {
    console.log("The sum is:", sum);
});
//Assignment 2 Solution
