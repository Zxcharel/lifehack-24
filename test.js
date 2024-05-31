document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      // Check if the clicked element is an anchor element
      if (event.target.tagName === 'A') {
        // Perform actions for link click
        var url = event.target.href;
        console.log('Link clicked:', url);
        // You can send this URL to your background script or perform any other action
      }
    });
  });
  

  



// old one
// {
//     "manifest_version": 3,
//     "name": "URL Safety Checker",
//     "version": "1.0",
//     "permissions": [
//       "declarativeNetRequest",
//       "activeTab",
//       "scripting",
//       "webRequest",
//       "webRequestBlocking",
//       "tabs"
//     ],
//     "background": {
//       "service_worker": "config/background.js"
//     },
//     "content_scripts": [
//       {
//         "matches": ["<all_urls>"],
//         "js": ["config/content.js"]
//       }
//     ],
//     "host_permissions": [
//       "<all_urls>"
//     ],
//     "web_accessible_resources": [
//       {
//         "resources": ["blocked.html"],
//         "matches": ["<all_urls>"]
//       }
//     ]
//   }
  