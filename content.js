// This script will run on the page and can interact with the DOM if needed
// console.log("Content script loaded.");

chrome.storage.local.get('url', (result) => {
    if (chrome.runtime.lastError) {
      console.error('Error retrieving URL:', chrome.runtime.lastError);
    } else {
      console.log('Stored URL:', result.url);
      // Use result.url as needed
      localStorage.setItem('url', result.url);
    }
  });
  
