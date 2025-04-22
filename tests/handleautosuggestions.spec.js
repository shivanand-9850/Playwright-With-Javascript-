const{test, expect}=require('@playwright/test')
test("verify Application Title", async ({page})=>{
    await page.goto("http://www.google.com")
    await page.locator("textarea[name='q']").type("shivananad Jadhav")
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
})
test.only("Verify Appplication Title Usingg loop", async ({page})=>{
    await page.goto("http://www.google.com")
    await page.locator("textarea[name='q']").type("Mukesh Otwani")
    await page.waitForSelector("//li[@role='presentation']")
    const elements = await page.$$("//li[@role='presentation']")
    for (let i=0; i<elements.length;i++)
    {
        const text=await elements[i].textContent()
        if (text.includes('playwright'))
        {
            await elements[i].click()
            break
        }
    }

})