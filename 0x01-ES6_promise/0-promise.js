// 0-promise.js

// Export the function as the default export of this module
export default function getResponseFromAPI() {
  // Return a new Promise object
  return new Promise((resolve, reject) => {
    // Logic for the Promise can be added here

    // For now, we can resolve the Promise immediately
    resolve('Success');
  });
}
