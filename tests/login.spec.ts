import { test, expect } from '@playwright/test';

test('login with correct credentials', async ({ page }) => {
  //Act
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('input[name="username"]', 'student');
  await page.fill('input[name="password"]', 'Password123');
  await page.click('button[id="submit"]');

  //Assert
  await expect(page).toHaveURL(
    'https://practicetestautomation.com/logged-in-successfully/'
  );
});

test('login with incorrect credentials', async ({ page }) => {
  //Act
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('input[name="username"]', 'nonexistentuser');
  await page.fill('input[name="password"]', '***WrongPassword***');
  await page.click('button[id="submit"]');

  //Assert
  await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});
