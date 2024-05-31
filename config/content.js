document.addEventListener('click', function(event) {
    console.log("running content")
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
      event.preventDefault();
      const url = event.target.href;
      chrome.runtime.sendMessage({ type: 'check_url', url: url });
    }
  });
  