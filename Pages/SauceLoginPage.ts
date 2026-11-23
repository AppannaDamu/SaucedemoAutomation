import { Page, Locator } from '@playwright/test';
export class LoginPage
{
    page:Page;

    userName:Locator;
    password:Locator;
    clickBtn:Locator;

    constructor(page: Page)
    {
        this.page=page;
        this.clickBtn = this.page.locator('#login-button');
        this.userName = this.page.locator('#user-name');
        this.password = this.page.locator('#password');

    }

    async verifyLogin(uid:string,pwd:string)
    {
        await this.userName.fill(uid);
       await this.password.fill(pwd);
       await  this.clickBtn.click();
        
    }

    //Getter Methods
    getUserName():Locator{
        return  this.userName;
    }

    getPassWord():Locator{
        return this.password;
    }

    getLoginBtn():Locator{
        return this.clickBtn;
    }


}