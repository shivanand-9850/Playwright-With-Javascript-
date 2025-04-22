const { test,expect } = require("@playwright/test")
const testdate = JSON.parse(JSON.stringify(require("../testdata.json")))


    test("Valid Login", async function ({page}){


        await page.goto("https://freelance-learn-automation.vercel.app/login", { timeout: 60000 })
        // await page.waitForLoadState("load")
        // await page.waitForSelector("//input[@placeholder='Your Email']")
        await page.getByPlaceholder("//input[@placeholder='Enter Email']").fill(testdate.username, {timeout: 60000 })
        await page.locator("//input[@type='password']").fill(testdate.password)
        await page.getByText("Login").click()
        await page.waitForTimeout(500)
        await expect(page).toHaveURL(/dashboard/);
        await page.locator("//div[@class='initials-avatar']").click()
        await page.getByText("Log Out").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveURL(/login/)

    })
