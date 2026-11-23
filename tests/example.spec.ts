import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  try{
  await page.goto('https://www.saucedemo.com/');
  await page.screenshot({path:'Screenshots/loginPage.png'})
  await page.getByPlaceholder('Username').fill('standard_user');
  const userName = await page.getByPlaceholder('Username').inputValue();
  console.log('userName: '+userName)
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.waitForTimeout(2000);
  const productName = await page.getByText('Sauce Labs Backpack').first().textContent();
  //await expect(page.getByText('Sauce Labs Backpack').first()).toHaveText('Sauce Labs Backpack');
  const slabsfoundVisible = await page.getByText('Sauce Labs Backpack').isVisible();
  //const slabsfoundChecked = await page.getByText('Sauce Labs Backpack').isChecked();
  const slabsfoundDiabled = await page.getByText('Sauce Labs Backpack').isDisabled();
  console.log('slabsfoundVisible: '+ slabsfoundVisible);
 // console.log('slabsfoundChecked: '+ slabsfoundChecked);
  console.log('slabsfoundDiabled: '+ slabsfoundDiabled);
  expect(productName).toBe('Sauce Labs Backpack')
  console.log('productName: '+productName);
// console.log('CI:'+ process.env.CI)
  }
  finally{
  await page.close();
  }
  



  


  

});  