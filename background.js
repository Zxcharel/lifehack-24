// Uncomment lines 7 to 77 to utilise the Google Safe Search API
// It has been commented out due to insufficient malicious website examples

// Google API version:


// const API_KEY = 'AIzaSyBPwVEMzRqc1CAvdCb3wVndMvp3sOoGFGY'; // Replace with your API key
// const SAFE_BROWSING_URL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;
// chrome.webNavigation.onBeforeNavigate.addListener(async function(details) {
//   const url = details.url;
//   console.log('Navigating to:', url);
    
//   const requestBody = {
//     client: {
//       clientId: 'yourcompanyname',
//       clientVersion: '1.0'
//     },
//     threatInfo: {
//       threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION'],
//       platformTypes: ['ANY_PLATFORM'],
//       threatEntryTypes: ['URL'],
//       threatEntries: [
//         { url: url }
//       ]
//     }
//   };
//   console.log('Request body:', requestBody);

//   try {
//     const response = await fetch(SAFE_BROWSING_URL, {
//       method: 'POST',
//       body: JSON.stringify(requestBody),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log('Safe Browsing API response:', response);

//     const data = await response.json();
//     console.log('Safe Browsing API data:', data);

//     if (data && data.matches && data.matches.length > 0) {
//       console.log('Warning: The site may be fraudulent or a scam.');
//       chrome.notifications.create({
//         type: 'basic',
//         title: 'Unsafe Site Warning',
//       });

//       // Redirect to the warning page
//       chrome.declarativeNetRequest.updateDynamicRules({
//         addRules: [{
//           id: 1,
//           priority: 1,
//           action: {
//             type: 'redirect',
//             redirect: {
//               extensionPath: `/index.html`
//             }
//           },
//           condition: {
//             urlFilter: url,
//             resourceTypes: ['main_frame']
//           }
//         }],
//         removeRuleIds: [1] // Remove any previous rule with the same id to avoid duplicates
//       });
//     } else {
//       console.log('Safe site: No warning.');
//       // Remove any existing rule for non-fraudulent URLs
//       chrome.declarativeNetRequest.updateDynamicRules({
//         removeRuleIds: [1]
//       });
//     }
//   } catch (error) {
//     console.error('Error checking URL:', error);
//   }
// }, { url: [{ urlMatches: '<all_urls>' }] });

/**
chrome.runtime.onInstalled.addListener(() => {
  // Remove existing rule first
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error removing rule:', chrome.runtime.lastError);
      return;
    }
    console.log('Existing rule removed successfully.');

    chrome.storage.local.set(
      {url: url}
    )

    // Now add the new rule
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: 'redirect', redirect: { extensionPath: '/index.html' } },
        condition: {
          urlFilter: 'http://localhost/hackathon/lifehack-24/websites/*', 
          resourceTypes: ['main_frame']
        }
      }]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error adding rule:', chrome.runtime.lastError);
      } else {
        console.log('Rule added successfully.');
      }
    });
  });
});
*/

chrome.runtime.onInstalled.addListener(() => {
  // Initialize the dynamic rules
  updateRules();
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Store the URL in local storage
    chrome.storage.local.set({ url: details.url }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error setting URL:', chrome.runtime.lastError);
      } else {
        console.log('URL set successfully:', details.url);
      }
    });

    // Return an empty object to not cancel the request
    return {};
  },
  { urls: ["http://localhost/hackathon/lifehack-24/websites/*"], types: ["main_frame"] }
);

function updateRules() {
  // Remove existing rule first
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error removing rule:', chrome.runtime.lastError);
      return;
    }
    console.log('Existing rule removed successfully.');

    // Now add the new rule
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: 'redirect', redirect: { extensionPath: '/warning.html' } },
        condition: {
          urlFilter: 'http://localhost/hackathon/lifehack-24/websites/*',
          resourceTypes: ['main_frame']
        }
      }]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error adding rule:', chrome.runtime.lastError);
      } else {
        console.log('Rule added successfully.');
      }
    });
  });
}
