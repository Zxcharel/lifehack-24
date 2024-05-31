## Fraudian Chrome Extension
1. Our project is called Fraudian. 
2. The chosen problem statement is Theme 1, Subtheme 1
3. Our hack is a Chrome extension that users can install that verifies if the Bank URL searched or clicked on is in the whitelist of verified bank URLs and thereafter blocks out phishing links. Additionally, it bridges the gap in public awareness about phishing links and malware, by breaking down the reasons of what makes the link malicious, while comparing with examples of how a legitimate bank link should look like. It also requires banks to collaborate and overcome legal limitations of wrongfully blacklisting regular sites by ensuring the whitelist is up to date and current. Ultimately tying in all three challenges into one effective innovative solution.
5. Our hack was built using Chrome Extension Developer Kit, Chrome Web Kit, HTML, CSS, Javascript, Vue.js and Google's Safe Browsing API.


## How to configure the Chrome Extension:
1. Extract the compressed file to a location on your computer.
2. Open Google Chrome and navigate to chrome://extensions/.
3. Enable Developer mode by toggling the switch in the top right corner of the page.
4. Click on the "Load unpacked" button.
5. Select the directory where you have extracted the extension files.
6. Turn on the extension.

Tada! You have successfully created the Fraudian Chrome extension.

Open localhost (for Windows) or localhost:[portnumber] (for Mac) on your machine and navigate to localhost/hackathon/lifehack-24/ </br>

You will be redirected to index.html which has 3 links that are "malicious". There are no available malicious links that can be found online so we had to make our own.</br></br>
Experiment with the different links and watch how our system detects what makes these links fraudulent!

## Bonus technical features
In background.js, we have implemented the use of Google's Safe Browsing API. </br>
Uncomment lines 7 to lines 77 and comment out lines 80 to lines 114. </br></br>
We do NOT have real malicious links due to ethical and legal concerns but if you do get your hands on any (somehow), the API will work and block you from accessing the page, while educating you on why it has been blocked.

