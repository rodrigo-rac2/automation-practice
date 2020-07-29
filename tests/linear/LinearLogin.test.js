module.exports = {
    'Simple login and check': function (browser) {
        browser
            .url("http://automationpractice.com/")
            //navigate to login page
            .click('a.login')
            //login
            .waitForElementVisible('#email', 5000)
            .setValue('#email', "rich.customer@test.com")
            .setValue('#passwd', "Password1234")
            .click('#SubmitLogin')
            //navigate back to home page
            .useXpath()
            .waitForElementVisible('//div[@class="header_user_info"]//a//span', 5000)
            .assert.containsText('//div[@class="header_user_info"]//a//span', 'Very Rich Person')
            .useCss()
            .end()
    }
}