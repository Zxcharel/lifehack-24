document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor element
    if (event.target.tagName === 'A') {
      // Perform actions for link click
      var url = event.target.href;
      alert('Link clicked:', url);
      // You can send this URL to your background script or perform any other action





    }
});
  