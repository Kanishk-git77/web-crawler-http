function normalizedURL(urlString){
    const urlObj = new URL(urlString)
    const HostPath = `${urlObj.hostname}${urlObj.pathname}`
    if( HostPath.length > 0 && HostPath.slice(-1) === '/'){
        return HostPath.slice(0, -1)
    }
    return HostPath
}

module.exports = {
    normalizedURL
}