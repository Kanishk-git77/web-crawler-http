function printReport(pages){
    console.log('=======================')
    console.log('=========REPORT========')
    console.log('=======================')

    const linkPages = sortPages(pages)
    for(const linkPage of linkPages){
        const url = linkPage[0]
        const count = linkPage[1]
        console.log(`Found ${count} internal links to ${url}`)
    }

    console.log('========================')
    console.log('=======END REPORT=======')
    console.log('========================')
}



function sortPages(pages){
    
    pageArr = Object.entries(pages)
    pageArr.sort((a,b) => {
        t1Value = a[1]
        t2Value = b[1]
        return b[1] - a[1]
    })
   
    return pageArr
}

module.exports = {
    sortPages,
    printReport
}