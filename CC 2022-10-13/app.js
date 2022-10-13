// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//url traditional 
// str with domain name only
//

function domainName(url){
   //replace stuff front of domain
   //split based on .

   url.replace('https://','')
   url.replace('http://','')
   url.replace('www.','')
   return url.split('.')[0];
}

console.log(domainName("http://github.com/carbonfive/raygun",'github'))
console.log(domainName("http://www.zombie-bites.com",'zombie-bites'))
console.log(domainName("https://www.cnet.com",'cnet')); 