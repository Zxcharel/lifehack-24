// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === 'check_url') {
//       checkUrlSafety(message.url, sendResponse);
//       // Return true to indicate you want to send a response asynchronously
//       return true;
//     }
//   });
  
//   function checkUrlSafety(url, sendResponse) {
//     // Call your backend API to check URL safety
//     // fetch(`https://your-backend-api.com/check?url=${encodeURIComponent(url)}`)
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     // Send the response back to the content script
//     //     sendResponse({ safe: data.safe });
//     //   })
//     //   .catch(error => {
//     //     console.error('Error checking URL safety:', error);
//     //     sendResponse({ safe: false });
//     //   });

//     alert(url)
//   }
  

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    // Only intercept top-level frame navigations
    if (details.frameId === 0) {
      const url = details.url;
      
      // Show a confirmation dialog
      please(url)
      
    }
  });

function please(url) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: (url) => {
          const proceed = confirm(`You are about to navigate to: ${url}\nDo you want to proceed?`);
          if (!proceed) {
            // If the user cancels, redirect to a safe page or an empty page
            window.location.href = 'about:blank';
          }
        },
        args: [url]
      });
}
  
  
  