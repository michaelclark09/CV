import { defineConfig, devices } from '@playwright/test';

/*
 * Runs against the live site by default. To test a locally run server, run `$env:BASE_URL="http://localhost:8080/"; npx playwright test` in the terminal.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 30_000,
  expect: { timeout: 5_000, toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled' } },
  // Inline annotations in GitHub Actions + HTML report
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }], ['list']]
    : [['html', { open: 'on-failure' }], ['list']],

  use: {
    baseURL: process.env.BASE_URL ?? 'https://michaelclark09.github.io/CV/',

    // Debugging evidence, only kept when something goes wrong
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    locale: 'en-GB',
    timezoneId: 'Europe/London',

    actionTimeout: 10_000,
    navigationTimeout: 15_000,
  },

  // devices to test on
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 15'] } },
  ],
});
