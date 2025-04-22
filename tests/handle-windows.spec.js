const { test, expect } = require('@playwright/test');

test("Working with Multiple tabs", async ({ browser }) => {
    const context = await browser.newContext(); // Add await here
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Fix Promise.all and waitForEvent usage
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click()
    ]);

    // Use waitForSelector instead of waitForTimeout
    await newPage.waitForSelector("(//input[@name='email'])[2]");
    await newPage.locator("(//input[@name='email'])[2]").type("Shivanand@gmail.com")
    await newPage.close()
    await page.waitForTimeout(5000)
    await page.locator("//input[@name='email1']").type("XYZ.Com")

});
