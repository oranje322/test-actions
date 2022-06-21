import { expect, Page, test } from "@playwright/test";

test("Sign In Button should be visible on the login page", async ({ page }) => {
    await page.goto('/');
    const signInButton = page.locator("button", { hasText: "Sign in" });
    await expect(signInButton).toBeEnabled();
});