var actions = {
    setEmail: function(email) {
        return this.setValue('@email', email)
    }, 
    setPassword: function(password) {
        return this.setValue('@password', password)
    },
    clickSignInButton: function() {
        return this.click('@signInButton')
    } 
}
var checks = {
    assertPageIsLoaded: function() {
        return this.waitForElementVisible('#email', 5000)
    }
}

module.exports = {
    commands: [ actions, checks ],
    elements: {
        email: '#email',
        password: '#passwd',
        signInButton: '#SubmitLogin'
    }
}