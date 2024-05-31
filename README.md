## Fraudian Chrome Extension


How to configure the Chrome Extension:
1. Extract the compressed file to a location on your computer.
2. Open Google Chrome and navigate to chrome://extensions/.
3. Enable Developer mode by toggling the switch in the top right corner of the page.
4. Click on the "Load unpacked" button.
5. Select the directory where you have extracted the extension files.
6. Turn on the extension.

Tada! You have successfully created the Fraudian Chrome extension.

Open localhost (for Windows) or localhost:<portnumber> (for Mac) on your machine and navigate to localhost/hackathon/lifehack-24/

You will be redirected to index.html which has 3 links that are "malicious". There are no available malicious links that can be found online so we had to make our own.
Experiment with the different links and watch how our system detects what makes these links fraudulent!

## Bonus technical features
In background.js, we have implemented the use of Google's Safe Browsing API.
Uncomment lines 7 to lines 77 and comment out lines 117 to lines 169.
We do NOT have real malicious links due to ethical and legal concerns but if you do get your hands on any (somehow), the API will work and inform you block you from accessing the page.

