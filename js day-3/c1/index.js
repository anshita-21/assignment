// const axios = require('axios');
// import axios from "axios";
//axios---> makes http requests
//require is a Node.js function that imports modules.
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();

// Async functions return a Promise.
// Await pauses the execution until the Promise is resolved.
// This makes handling asynchronous tasks (like API requests) more straightforward and readable.

// async
// When you declare a function with the async keyword, it means that this function will return a Promise.
// Inside an async function, you can use the await keyword to pause the execution until a Promise is resolved.

// await
// The await keyword can only be used inside async functions.
// It makes the function wait for a Promise to settle (either resolved or rejected) before continuing to the next line of code.
// This allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read.

//$ node index.js