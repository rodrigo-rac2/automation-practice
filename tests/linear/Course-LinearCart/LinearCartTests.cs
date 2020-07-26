using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using SeleniumExtras.WaitHelpers;
using System;
using System.Collections.Generic;

// Linear Shopping Cart tests for C#
namespace LinearTests
{
    [TestClass]
    public class LinearCartTests
    {
        /// <summary>
        /// Log in, add 2 items to the basket and proceed through checkout to payment, log out.
        /// </summary>
        [TestMethod]
        public void LinearAddToCartTest()
        {
            // initialisation
            var browser = new ChromeDriver();
            var wait = new WebDriverWait(browser, TimeSpan.FromSeconds(10));
            browser.Manage().Window.Maximize();

            // go to website
            browser.Navigate().GoToUrl("http://automationpractice.com/");

            // navigate to login page
            IWebElement signInLink = browser.FindElement(By.CssSelector("a.login"));
            signInLink.Click();

            // log in
            wait.Until(ExpectedConditions.ElementIsVisible(By.Id("email")));
            IWebElement usernameTextbox = browser.FindElement(By.Id("email"));
            usernameTextbox.SendKeys("petejenkins@test.com");
            IWebElement passwordTextbox = browser.FindElement(By.Id("passwd"));
            passwordTextbox.SendKeys("Password1234");
            IWebElement signInButton = browser.FindElement(By.Id("SubmitLogin"));
            signInButton.Click();

            // navigate back to home page
            wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector("a.home")));
            var homeLink = browser.FindElement(By.CssSelector("a.home"));
            homeLink.Click();

            // select the first product
            IList<IWebElement> productLinks = browser.FindElements(By.CssSelector("a.product-name"));
            wait.Until(ExpectedConditions.ElementToBeClickable(productLinks[0]));
            productLinks[0].Click();

            // add 1 item to the shopping cart
            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//p[@id='add_to_cart']/button")));
            IWebElement addToCartButton = browser.FindElement(By.XPath("//p[@id='add_to_cart']/button"));
            addToCartButton.Click();

            // proceed to checkout
            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//a[@title='Proceed to checkout']")));
            IWebElement proceedToCheckoutButton = browser.FindElement(By.XPath("//a[@title='Proceed to checkout']"));
            proceedToCheckoutButton.Click();

            // verify we have 1 item in the shopping cart
            string numProductsLabelText = browser.FindElement(By.Id("summary_products_quantity")).Text;
            int spaceLocation = numProductsLabelText.IndexOf(" ");
            int numProducts = Int32.Parse(numProductsLabelText.Substring(0, spaceLocation));
            Assert.AreEqual(numProducts, 1, "Expected number of products in shopping cart was 1 but actual value was: " + numProducts.ToString());

            browser.Quit();
        }

    }
}
