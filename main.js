const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){

 if(process.argv.length < 3){
     console.log('No command line argrument')
     process.exit(1)
 }
 if(process.argv.length > 3){
     console.log('More than 1 command line argrument')
     process.exit(1)
 }

    // for( const url of process.argv){
    //     console.log(url)
    // }
    
 const baseURL = process.argv[2]

 console.log(`Started crawling: ${baseURL}`)
 const pages = await crawlPage(baseURL, baseURL, {})

printReport(pages)

}

main()


