import  { test } from "@playwright/test";
import LoginPage from "../page/LoginPage"; 

test ("test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("rushikeshw-v8du@force.com");
    await loginPage.fillPassword("Rwasule@1997");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();

     

});