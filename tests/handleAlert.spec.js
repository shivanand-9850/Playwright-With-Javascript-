const {test, expect} = require('@playwright/test')

test ("Handle Alert", async({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("alert")

        expect(dialogWindow.message()).toContain("I am a JS Alert")
        await dialogWindow.dismiss()
        // await dialogWindow.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
})
test("Handle Cofirm Box", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("confirm")

        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await dialogWindow.dismiss()
        // await dialogWindow.accept()
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
})
test("Handle Prompt Box", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("prompt")

        expect(dialogWindow.message()).toContain("I am a JS prompt")
        // await dialogWindow.dismiss()
        await dialogWindow.accept()
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(5000)
})