const {test, expect } = require('@playwright/test')

test("Handle Frames", async ({ page }) => {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const ifarame = await page.frameLocator("//frame[@name='packageListFrame']")
    await ifarame.locator("//a[text()='java.applet']").click()
    await page.pause()



})