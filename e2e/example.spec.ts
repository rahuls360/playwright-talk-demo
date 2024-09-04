import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  const searchBox = page.getByLabel('Search');
  await searchBox.click();
  const searchInput = page.getByPlaceholder('Search docs')
  await searchInput.fill('locator');
  await expect(page.getByRole('link', { name: 'Locators', exact: true })).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByRole('button', { name: 'Guides' }).click();
  await expect(page.getByRole('link', { name: 'Best Practices' })).toBeVisible();
});
