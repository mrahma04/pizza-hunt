const loadtest = require('loadtest')

const options = {
    url: 'https://monolith-vpuiu5m2oa-uc.a.run.app/',
    maxRequests: 5000,
}

loadtest.loadTest(options, (err, result) => {
    if (err) {
        console.error('Error: ', err)
        return
    }
    console.log('Tests ran successfully!')
    return
})