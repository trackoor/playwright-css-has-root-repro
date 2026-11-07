import { test, expect } from '@playwright/test';

test(':has(> ...) and :scope > ... on the <html> element', async ({ page }) => {
  await page.setContent('<body class="dark"><div><p>x</p></div></body>');

  // native querySelectorAll finds 1 for each of these
  expect(await page.evaluate(() => document.querySelectorAll('html:has(> body)').length)).toBe(1);

  await expect(page.locator('html:has(> body)')).toHaveCount(1);
  await expect(page.locator(':root:has(> body)')).toHaveCount(1);
  await expect(page.locator('html').locator(':scope > body')).toHaveCount(1);
});
