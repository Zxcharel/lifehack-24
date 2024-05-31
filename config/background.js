// manifest file
// {
//     "manifest_version": 3,
//     "name": "Hello Extensions",
//     "description": "Base Level Extension",
//     "version": "1.0",
//     "action": {
//         "default_title": "click to show alert",
//         "default_icon": "img/test_icon.png"
//     },
//     "permissions": ["activeTab", "scripting"],
//     "background": {
//         "service_worker": "config/background.js"
//     }
// }


//initial set up test => works
// chrome.action.onClicked.addListener((tab) => {
//     // Log the tab information for debugging
//     console.log('Tab info:', tab);

//     // Check if the URL is a chrome:// URL
//     if (tab.url && tab.url.startsWith('chrome://')) {
//         console.error('Cannot access chrome:// URLs');
//         return;
//     }

//     // Try to execute the script and handle any errors
//     try {
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: ['config/content.js']
//         }, () => {
//             if (chrome.runtime.lastError) {
//                 console.error('Error executing script:', chrome.runtime.lastError);
//             } else {
//                 console.log('Script executed successfully');
//             }
//         });
//     } catch (error) {
//         console.error('Caught error:', error);
//     }
// });

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
// });

// const extensions = 'https://developer.chrome.com/docs/extensions'
// const webstore = 'https://developer.chrome.com/docs/webstore'

// chrome.runtime.onInstalled.addListener(async (tab) => {
// // chrome.action.onClicked.addListener(async (tab) => {
//   if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON'

//     console.log("running")

//     // Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     });

//     console.log("next state: " + nextState)

//     if (nextState === "ON") {
//         // Insert the CSS file when the user turns the extension on
//         await chrome.scripting.insertCSS({
//             files: ["config/focus-mode.css"],
//             target: { tabId: tab.id },
//         });

//         console.log("css inserted")

//         } else if (nextState === "OFF") {
//         // Remove the CSS file when the user turns the extension off
//         await chrome.scripting.removeCSS({
//             files: ["focus-mode.css"],
//             target: { tabId: tab.id },
//         });

//         console.log("css removed")
//     }
    
//     else {
//         console.log("did not inject css")
//     }

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['config/content.js']
//     });

//   }

// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("runnign")
    if (message.type === 'check_url') {
      checkUrlSafety(message.url, sender.tab.id);
    }
});
  
function checkUrlSafety(url, tabId) {
// Call your backend API to check URL safety
    // fetch(`https://your-backend-api.com/check?url=${encodeURIComponent(url)}`)
    //     .then(response => response.json())
    //     .then(data => {
    //     if (data.safe) {
    //         // URL is safe, proceed to navigate
    //         chrome.tabs.update(tabId, { url: url });
    //     } else {
    //         // URL is not safe, show blocked page
    //         chrome.tabs.update(tabId, { url: chrome.runtime.getURL('blocked.html') });
    //     }
    //     })
    //     .catch(error => {
    //     console.error('Error checking URL safety:', error);
    // });

    console.log("running check")

    if (url == "https://www.about.google.com") {
        console.log("rendering html")
        chrome.tabs.update(tabId, { url: chrome.runtime.getURL('blocked.html') });
    }

}
  