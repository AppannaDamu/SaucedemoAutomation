import { LoginPage } from "../Pages/SauceLoginPage";
import {test,expect} from '@playwright/test'

test('Verfiy login of Quote',async({page})=>
{
    try{
    await page.goto('https://www.saucedemo.com/');
    const quoteLogin = new LoginPage(page);
    quoteLogin.verifyLogin('standard_user','secret_sauce');
    await expect(page).toHaveTitle('Swag Labs');
    const productName=await page.locator('.title').textContent();
    console.log(productName);
    expect(productName).toBe('Products');
    }
    finally{
        await page.close();
    }

});              