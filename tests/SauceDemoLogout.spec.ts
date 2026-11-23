import {test,expect} from '@playwright/test';
import { LogoutPage } from '../Pages/SauceLogoutPage';
test('verify logout of the user',async({page})=>
{
    const logOut = new LogoutPage(page);
    logOut.verifyLogout();
});