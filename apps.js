// TODO : [x] Connect to Github API
let https = require('https')

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/tux40',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, (result) =>{
    console.log('Got Response: ', result.statusCode)
})

request.end()

request.on('error', (e) => {
    console.error(e)
})
// TODO : Read the data
// TODO : Parse the data
// TODO : Print the data out 


