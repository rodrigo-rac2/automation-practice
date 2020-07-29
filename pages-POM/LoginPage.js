var actions = {
    setEmail: function (email) {
        return this
            .waitForElementVisible('@email', 5000)
            .clearValue('@email')
            .setValue('@email', email)
    },
    setPassword: function (password) {
        return this
            .waitForElementVisible('@password', 5000)
            .clearValue('@password')
            .setValue('@password', password)
    },
    clickSignInButton: function () {
        return this
            .waitForElementVisible('@signInButton', 5000)
            .click('@signInButton')
    },
    loginWith: function (email, password) {
        return this
            .setEmail(email)
            .setPassword(password)
            .clickSignInButton()
    }
}
var checks = {
    assertPageIsLoaded: function () {
        return this.waitForElementVisible('@email', 5000)
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
        email: '#email',
        password: '#passwd',
        signInButton: '#SubmitLogin'
    }
}