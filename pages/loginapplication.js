const {expect } = require("@playwright/test");

class Loginapplication{
    constructor(page)
    {
        this.page=page
        this.Username="//input[@placeholder='Username']"
        this.Password="//input[@placeholder='Password']"
        this.products="//div[text()='Filter Applied :']"
        this.loginbutton="//button[text()='Login']"
    }
    async loginToApplication(username,passwoed)
    {
        await this.page.fill(this.Username,username)
        await this.page.fill(this.Password, passwoed)
        await this.page.click(this.loginbutton)
        await this.page.pause()
    }
    async verifyLogIn()
    {
        await expect(this.page.locator(this.products)).toBeVisible()
    }
}
module.exports=Loginapplication;