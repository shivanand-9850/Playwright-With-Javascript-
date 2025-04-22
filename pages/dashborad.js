const {expect } = require("@playwright/test");
class DashboardPage{
    constructor(page)
    {
        this .page=page
        this.menu="//div[@class='initials-avatar']"
        this.logoutoption="//div[@class='initials-avatar']"
        this.loginbutton="//span[text()='Total Quote Requests']"
        
    }
    async LogoutToApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
        // await this.page.pause()
    }
    async verifyLogOut()
        {
            await expect(this.page.locator(this.loginbutton)).toBeVisible()
        }
    
}
module.exports=DashboardPage;

