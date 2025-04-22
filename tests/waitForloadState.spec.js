import { test, expect } from '@playwright/test';

test("working with Load State", async ({page}) =>{

     await page.goto("https://supplier-test.clearcost.ag/login?redirect-url=/dashboard")
     await page.waitForSelector("//input[@placeholder='Your Email']")
     await page.waitForLoadState("networkidle")
     await page.getByPlaceholder("//input[@placeholder='Your Email']").fill("superadmin@clearcost.ag", {delay:200})
     await page.locator("//input[@type='password']").fill("123456")
})