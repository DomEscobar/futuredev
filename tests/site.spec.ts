import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`${viewport.name} story and interactions`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Wer baut, wenn Software selbst baut?" })).toBeVisible();

    for (const id of ["shift", "loop", "example", "lab", "scenarios", "roles"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
      if (id === "loop") {
        for (const node of await page.locator(".loop-node").all()) {
          await node.scrollIntoViewIfNeeded();
        }
      }
    }

    await expect(page.locator(".role-grid article").first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Repo ansehen/ })).toHaveAttribute("href", "https://github.com/DomEscobar/image-to-world");
    await page.getByRole("tab", { name: /Die Software-Explosion/ }).click();
    await expect(page.locator(".scenario-detail h3")).toHaveText("Die Software-Explosion");

    await page.locator("input[aria-label='Organisation']").fill("95");
    await page.locator("input[aria-label='Verifikation']").fill("20");
    await expect(page.locator(".lab-result h3")).toHaveText("Wahrheit ist der Engpass");

    const overflow = await page.evaluate(() => {
      const width = document.documentElement.clientWidth;
      return [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.right > width + 2 || rect.left < -2;
        })
        .map((element) => ({ tag: element.tagName, className: element.className, text: element.innerText?.slice(0, 40) }));
    });
    expect(overflow).toEqual([]);

    await page.locator(".icon-button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.screenshot({ path: `test-results/${viewport.name}.png`, fullPage: true });
  });
}
