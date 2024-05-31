

    // const url = window.location.href;
    // const url = "http://www.youtube.com/videos/user/search?query=lnx1n1ZM6Bc&ab_channel="

    const testUrls = {
      'http://localhost/hackathon/lifehack-24/websites/unsafe-protocol.html': 'http://www.internet-banking.dbs.com.sg/IB/welcome',
      'http://localhost/hackathon/lifehack-24/websites/unsafe-domain.html': 'https://www.internet.banking.sc.com.sg/IB/welcome?sg=1',
      'http://localhost/hackathon/lifehack-24/websites/unsafe-query.html': 'https://www.uob.com.sg/IB/welcome?sg=',
    }

    const url = testUrls[localStorage.getItem('url')];
    console.log(url);
    const temp = url.split('//');
    const protocol = temp[0];
    const urlArr = temp[1].split('/');
    const path = urlArr.slice(1, urlArr.length - 1).join('/');
    const domain = urlArr[0];
    const query = urlArr[urlArr.length - 1];

    const bankKeywords = {
        'dbs': 'www.dbs.com.sg',
        'ocbc': 'www.ocbc.com.sg',
        'uob': 'www.uob.com.sg',
        'hsbc': 'www.hsbc.com.sg',
        'sc': 'www.sc.com.sg',
        'cimb': 'www.cimbpreferred.com.sg',
        'citibank': 'www.citibank.com.sg',
        'maybank': 'www.maybank2u.com.sg',
    };

    

    const app = Vue.createApp({
      data() {
        return {
          url: url,
          protocol: protocol,
          domain: domain,
          path: path,
          query: query,
          safeDomain: "",
          safeQuery: "",
          safeTips: ""
        }
      },

      methods: {

        getTips() {

          document.getElementById("button").style.display = "none";

          if (protocol === "http:") {
            document.getElementById("protocol").style.display = "block";
            this.safeTips += "- Use HTTPS protocol </br>";
          }

          if (this.isBankDomain !== false && this.domain !== bankKeywords[this.isBankDomain]) {
            document.getElementById("domain").style.display = "block";
            this.safeDomain = bankKeywords[this.isBankDomain]
            this.safeTips += "- Visit websites with trusted domain names </br> ";
          }
          else {
            this.safeDomain = domain;
          }

          if (query.includes('?')) {

            queries = query.split('&')
            console.log(queries)

            for (check of queries) {
              console.log(check)
              if (check.split('=').size != 2 || check.split('=')[1] == "--") {
                document.getElementById("query").style.display = "block";
                this.safeTips += "- Avoid websites with suspicious queries </br>";
                this.safeQuery = "?query=example&key=value";
                break;
              }
            }

          }
          else {
            this.safeQuery = query;
          }

          document.getElementById("safe").style.display = "block"; 

        }

      },

      computed: {

        isBankDomain() {
          for (const [keyword, properDomain] of Object.entries(bankKeywords)) {
              if (this.domain.includes(keyword)) {
                  this.bankDomain = properDomain;
                  return keyword;
              }
          }
          return false;
        }

      }

    });

    app.mount('#app');

