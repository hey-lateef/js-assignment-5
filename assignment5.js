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
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully.");
      }, 2000);
    });
  }
  
  // Example usage:
  getData()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    //Assignment 3 Solution:
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    async function fetchData(){
        try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        }
        catch(error){
            console.log("Something Went Wrong",error);
        }
    }
fetchData();



//Assignment 4 Solution:
async function fetchData(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log("Something Went Wrong",error);
    }
}
fetchData();

//Assignment 5 Solution
function multiplyWithCallback(numbers, callback) {
    // Check if numbers is an array
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array.");
    }
  
    // Map over the array, multiply each element by 2, and pass the result to the callback
    const multipliedNumbers = numbers.map((num) => num * 2);
    
    // Pass the multiplied numbers to the callback function
    callback(multipliedNumbers);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const callbackFunction = (result) => {
    console.log("Result:", result);
  };
  
  multiplyWithCallback(numbers, callbackFunction);

  //Assignment 6 
  async function fetchUserDataAndPosts(userId) {
    try {
      // Fetch user details
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await userResponse.json();
  
      // Fetch user's posts
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const postsData = await postsResponse.json();
  
      // Create an object with user details and posts
      const result = {
        user: userData,
        posts: postsData,
      };
  
      return result;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  // Example usage:
  const userId = 1; 
  fetchUserDataAndPosts(userId)
    .then((data) => {
      console.log('User details:', data.user);
      console.log('User posts:', data.posts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  //Assignment 7
  async function fetchMultipleData(urls) {
    try {
        const responses = await Promise.all(urls.map(async (url) => {
            const response = await fetch(url); 
            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}`);
            }
            return response.json();
        }));
        return responses;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return []; 
    }
}

// Example usage:
const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    
];

fetchMultipleData(urlsToFetch)
    .then((responses) => {
        console.log('Fetched data:', responses);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
    
//Assignment 8
async function racePromises(promises) {
  try {
      const result = await Promise.race(promises);
      return result; 
  } catch (error) {
      console.error('Error:', error.message);
      throw error; 
  }
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve('First resolved'), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject(new Error('Second rejected')), 500));

racePromises([promise1, promise2])
  .then((result) => {
      console.log('Result:', result); 
  })
  .catch((error) => {
      console.error('Error:', error.message); 
  });




  
