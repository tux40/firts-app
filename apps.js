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

// TODO : Read the data
let request = https.request(options, (response) =>{
    let body=''
    response.on('data', (data) => {
        body = body + data 
    })
    response.on('end', () => {
        // TODO : [x] Parse the data (Convert String To JSON)
        let profile = JSON.parse(body)
        //console.log(profile.login + ' owns ' + profile.public_repos + ' repo(s) ')
        console.log(`${profile.login} owns 
        ${profile.public_repos} repo(s) and 
        has ${profile.followers} follower(s)`)
    })  
})

request.end()

request.on('error', (e) => {
    console.error(e)
})


// TODO : Print the data out 


