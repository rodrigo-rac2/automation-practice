import static org.junit.jupiter.api.Assertions.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Test;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

// Linear Shopping Cart tests for Java
public class LinearCartTests {

    @Test
    public void LinearAddToCartTest() {

        // initialisation
        WebDriver browser = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(browser, 10);
        browser.manage().window().maximize();

        // go to website
        browser.get("http://automationpractice.com/");

        // navigate to login page
        WebElement signInLink = browser.findElement(By.cssSelector("a.login"));
        signInLink.click();

        // log in
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("email")));
        WebElement emailTextbox = browser.findElement(By.id("email"));
        emailTextbox.sendKeys("petejenkins@test.com");
        WebElement passwordTextbox = browser.findElement(By.id("passwd"));
        passwordTextbox.sendKeys("Password1234");
        WebElement signInButton = browser.findElement(By.id("SubmitLogin"));
        signInButton.click();

        // navigate back to home page
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a.home")));
        WebElement homeLink = browser.findElement(By.cssSelector("a.home"));
        homeLink.click();

        // select the first product
        List<WebElement> productLinks = browser.findElements(By.cssSelector("a.product-name"));
        wait.until(ExpectedConditions.elementToBeClickable(productLinks.get(0)));
        productLinks.get(0).click();

        // add 1 item to the shopping cart
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[@id='add_to_cart']/button")));
        WebElement addToCartButton = browser.findElement(By.xpath("//p[@id='add_to_cart']/button"));
        addToCartButton.click();

        // proceed to checkout
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@title='Proceed to checkout']")));
        WebElement proceedToCheckoutButton = browser.findElement(By.xpath("//a[@title='Proceed to checkout']"));
        proceedToCheckoutButton.click();

        // verify we have 1 item in the shopping cart
        String numProductsLabelText = browser.findElement(By.id("summary_products_quantity")).getText();
        int spaceLocation = numProductsLabelText.indexOf(" ");
        int numProducts = Integer.parseInt(numProductsLabelText.substring(0, spaceLocation));
        assertEquals(numProducts, 1, "Expected number of products in shopping cart was 1 but actual value was: " + Integer.toString(numProducts));

        browser.quit();
    }
}
