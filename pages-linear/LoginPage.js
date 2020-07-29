var actions = {
    setEmail: function (email) {
        return this
            .setValue('@emailTextBox', email)
    },
    setPassword: function(password) {
        return this.setValue('@passwordTextBox', password)
    },
    clickSignInButton: function() {
        return this.click('@signInButton')
    }
}
var checks = {
    assertThatPageIsLoaded: function() {
        return this.waitForElementVisible('@emailTextBox', 5000)
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
        emailTextBox: '#email',
        passwordTextBox: '#passwd',
        signInButton: '#SubmitLogin'
    }
}