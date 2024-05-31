//works

// // This function will be called when the page loads
// function checkUrlOnLoad() {
//     const url = window.location.href;
//     console.log('Page loaded with URL:', url);
  
//     // You can send this URL to your background script or perform any other action
//     // chrome.runtime.sendMessage({ type: 'check_url', url: url }, function(response) {
//     //   console.log('Response from background script:', response);
//     // });

//     alert(url)
// }
  
// // Ensure the function is called when the DOM content is fully loaded
// document.addEventListener('DOMContentLoaded', checkUrlOnLoad);

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.href) {
      event.preventDefault(); // Prevent the default navigation
  
      const clickedUrl = event.target.href;
      const proceed = confirm(`You are about to navigate to: ${clickedUrl}\nDo you want to proceed?`);
  
      if (proceed) {
        // If the user confirms, navigate to the URL
        window.location.href = clickedUrl;
      } else {
        // If the user cancels, do nothing
        console.log('Navigation to URL cancelled:', clickedUrl);
      }
    }
  });
  
  
  


// document.addEventListener('click', function(event) {
//     // Check if the clicked element is an anchor element
//     if (event.target.tagName === 'A') {
//       // Perform actions for link click
//       var url = event.target.href;
//       alert('Link clicked:', url);
//       // You can send this URL to your background script or perform any other action





//     }
// });
  