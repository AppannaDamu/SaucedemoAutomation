import {Page,Locator} from '@playwright/test';
export class LogoutPage
{
    page:Page;
    hamburgerIcon:Locator;
    logoutIcon:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.hamburgerIcon=this.page.locator('#react-burger-menu-btn');
        this.logoutIcon= this.page.locator('#logout_sidebar_link');

    }
    async verifyLogout()
    {
        await this.hamburgerIcon.click();
        await this.logoutIcon.click();

    }

    
}