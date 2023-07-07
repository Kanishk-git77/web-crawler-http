const{JSDOM}  = require('jsdom')
 
function getURLsFromHtml(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const directLinks = dom.window.document.querySelectorAll('a') 
    for (directLink of directLinks){
       if (directLink.href.slice(0, 1) === '/') {
            // Its Relative URL
            try {
                const urlObj = new URL(`${baseURL}${directLink.href}`)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`This Relative URL is: ${err.message}`)
            }
       } else {
            // Its Actual URL
            try {
                const urlObj = new URL(directLink.href)
                urls.push(urlObj.href)
            } catch (err) {
                console.log(`This Actual URL is: ${err.message}`)
            }
       }
    }
    return urls
}

function normalizedURL(urlString){
    const urlObj = new URL(urlString)
    const HostPath = `${urlObj.hostname}${urlObj.pathname}`
    if( HostPath.length > 0 && HostPath.slice(-1) === '/'){
        return HostPath.slice(0, -1)
    }
    return HostPath
}

module.exports = {
    normalizedURL,
    getURLsFromHtml
}