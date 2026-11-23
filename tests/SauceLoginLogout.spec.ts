import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/SauceLoginPage';
import { LogoutPage } from '../Pages/SauceLogoutPage';
test('verify login and logout', async ({ page }) => {
    try {
        await page.goto('https://www.saucedemo.com/');
        const sLogin = new LoginPage(page);
        await sLogin.verifyLogin('standard_user', 'secret_sauce');
        await expect(page).toHaveTitle('Swag Labs');
        const productName = await page.locator('.title').textContent();
        console.log(productName);
        await expect(productName).toBe('Products');
        const slogOut = new LogoutPage(page);
        await slogOut.verifyLogout();
        await expect(sLogin.getLoginBtn()).toBeEnabled();

    }
    finally {
        await page.close();
    }


});
