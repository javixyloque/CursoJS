startApp()

function startApp () {
   console.log(`Starting app...`)

   second()
}

function second () {
   console.log ('From the second function')
   authUser('Pablo')
}

function authUser (user) {
   console.log ('Authenticating user... wait...')
   console.log (`Logged in successfuly: ${user}`)
}
