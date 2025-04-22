import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-test.clearcost.ag/login');
  await page.waitForTimeout(80000)
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('superadmin@clearcost.ag');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'dash Dashboard' }).click();
  await page.getByText('Content').click();
  await page.getByRole('link', { name: 'dash Dashboard' }).click();
  await page.getByRole('button', { name: 'S' }).nth(1).click();
  await page.getByText('Log Out').click();
});