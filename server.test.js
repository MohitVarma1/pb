const server = require('./server')
//Unit Test
test('Port is 3001', () => {
    expect(server()).not.toBe(3000)
    expect(server()).toBe(3001)
})

