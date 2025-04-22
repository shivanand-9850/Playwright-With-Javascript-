const { test,expect } = require("@playwright/test")
test("Select Values From Dropdown", async function ({page}) {

    await page.goto("https://supplier-test.clearcost.ag/login")
    await page.waitForTimeout(80000)
    await page.getByPlaceholder("#Your Email").fill("shivanand.jadhav@altysys.com")
    await page.getByPlaceholder("#Your Password").type("123456")
    await page.getByText("Login").click()
    await page.getByText("Location").click()
    await page.getByText("Add").click()
    await page.getByText("Select Country").selectOption({label:"Canada"})
    await page.getByText("Select Province").selectOption({value:"British Columbia"})
    await page.getByText("Select Province").selectOption({index:4})
    
})