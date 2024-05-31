function initialize() {
    // chrome.storage.local.get('url', (result) => {
    //     if (chrome.runtime.lastError) {
    //         console.error('Error retrieving URL:', chrome.runtime.lastError);
    //     } else {
    //         console.log('Stored URL:', result.url);
    //         // Use result.url as needed
    //         localStorage.setItem('url', JSON.stringify(result.url));
    //     }
    // });
    return new Promise((resolve, reject) => {
        chrome.storage.local.get('url', (result) => {
            if (chrome.runtime.lastError) {
                console.error('Error retrieving URL:', chrome.runtime.lastError);
                reject(chrome.runtime.lastError);
            } else {
                console.log('Stored URL:', result.url);
                localStorage.setItem('url', JSON.stringify(result.url));
                resolve();
            }
        });
    });
}