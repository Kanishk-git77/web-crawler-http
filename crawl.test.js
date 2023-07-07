const { normalizedURL } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

//testing

test('NormalizedURl strip protocol `https`', () => {
    const input = 'https://wagslane.dev/path' // what is input.
    const actualOutput = normalizedURL(input) // what is output of fucntion imported
    const expectedOutput = 'wagslane.dev/path' // what outoput is expected.
    expect(actualOutput).toEqual(expectedOutput) //checking the actualOutput is equal to expectedOutput or not.
})

test('NormalizedURl strip end slash', () => {
    const input = 'https://wagslane.dev/path/' 
    const actualOutput = normalizedURL(input) 
    const expectedOutput = 'wagslane.dev/path' 
    expect(actualOutput).toEqual(expectedOutput)
})
 
test('NormalizedURl capitals', () => {
    const input = 'https://Wagslane.Dev/path/' 
    const actualOutput = normalizedURL(input) 
    const expectedOutput = 'wagslane.dev/path' 
    expect(actualOutput).toEqual(expectedOutput)
})

test('NormalizedURl strip `http`', () => {
    const input = 'http://wagslane.dev/path/' 
    const actualOutput = normalizedURL(input) 
    const expectedOutput = 'wagslane.dev/path' 
    expect(actualOutput).toEqual(expectedOutput)
})