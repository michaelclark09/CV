import { test, expect } from '@playwright/test';

test.describe('basic checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('title and heading are correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Michael Clark/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Michael Clark', {
      useInnerText: true,
      ignoreCase: true,
    });
  });

  test('nav links jump to their sections', async ({ page }) => {
    for (const name of ['Profile', 'Experience', 'Skills', 'Background', 'Contact']) {
      const link = page.getByRole('navigation').getByRole('link', { name, exact: true });
      const href = await link.getAttribute('href');
      expect(href, `${name} link should be an in-page anchor`).toMatch(/^#/);

      await link.click();
      await expect(page).toHaveURL(new RegExp(`${href}$`));
      await expect(page.locator(href!)).toBeInViewport();
    }
  });

  test('contact links are correct', async ({ page }) => {
    await expect(
      page.locator('a[href^="mailto:michaelclarkwork@live.co.uk"]').first(),
    ).toBeVisible();
    await expect(page.locator('a[href*="linkedin.com/in/michaelclark09"]')).toHaveCount(1);
  });
});
