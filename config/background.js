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
//               extensionPath: `../main/index.html`
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


// chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
//     const url = details.url;
//     console.log('Navigating to:', url.href); // Log the URL being navigated to
//     if (url.hostname === 'www.nestle.com' && url.protocol === 'https:') {
//       console.log('Redirecting to warning page...'); // Log the redirection
//       // Redirect to the warning page
//       chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('../main/index.html') });
//     }
//   }, { url: [{ hostEquals: 'www.nestle.com' }] });
  

  chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: 'redirect', redirect: { extensionPath: '../main/index.html' } },
        condition: {
          urlFilter: 'https://www.nestle.com/*',
          resourceTypes: ['main_frame']
        }
      }],
      removeRuleIds: [1]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log('Rule added successfully.');
      }
    });
  });
  