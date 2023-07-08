const { sortPages } = require('./report.js')
const {test, expect} = require('@jest/globals')


test('sortPages 2 pages', () => {
    const input = {
        'http://wageslane.dev/path': 1,
        'http://wageslane.dev': 3
    } 
    const actualOutput = sortPages(input) 
    const expectedOutput = [
        ['http://wageslane.dev', 3],
        ['http://wageslane.dev/path', 1]
    ] 
    expect(actualOutput).toEqual(expectedOutput)
})

test('sortPages more than 2 pages', () => {
    const input = {
        'http://wageslane.dev/path': 1,
        'http://wageslane.dev': 3,
        'http://wageslane.dev/path1': 2,
        'http://wageslane.dev/path2': 6,
        'http://wageslane.dev/path4': 8
    } 
    const actualOutput = sortPages(input) 
    const expectedOutput = [
        ['http://wageslane.dev/path4', 8],
        ['http://wageslane.dev/path2', 6],
        ['http://wageslane.dev', 3],
        ['http://wageslane.dev/path1', 2],
        ['http://wageslane.dev/path', 1]
    ] 
    expect(actualOutput).toEqual(expectedOutput)
})