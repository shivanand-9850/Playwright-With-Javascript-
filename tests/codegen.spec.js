import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-test.clearcost.ag/login');
});