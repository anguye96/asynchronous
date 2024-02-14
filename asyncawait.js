// Function that returns a Promise and simulates an asynchronous operation
function asynchronousFunction() {
    return new Promise(resolve => {
      console.log("Start asynchronous function");
      setTimeout(() => {
        console.log("End asynchronous function");
        resolve("Asynchronous function completed");
      }, 2000);
    });
  }
  
  // Async function using the async/await syntax
  async function main() {
    console.log("Start main function");
  
    // Call the asynchronous function and wait for it to complete
    await asynchronousFunction();
  
    console.log("Main function completed");
  }
  
  // Run the main function
  main();
  