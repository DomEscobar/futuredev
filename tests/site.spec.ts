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

    for (const id of ["shift", "proof", "loop", "lab", "harness", "beyond", "scenarios", "roles"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
      if (id === "loop") {
        for (const node of await page.locator(".loop-node").all()) {
          await node.scrollIntoViewIfNeeded();
        }
      }
    }

    await expect(page.locator(".role-grid article").first()).toBeVisible();
    await page.getByRole("tab", { name: "Meta", exact: true }).click();
    await expect(page.locator(".company-detail h3")).toHaveText("Kontext als Infrastruktur");

    await page.getByRole("tab", { name: "Migration", exact: true }).click();
    await expect(page.locator(".workshop-brief h3")).toContainText("sichere Batches");

    await page.getByRole("tab", { name: /Intent-driven/ }).click();
    await expect(page.locator(".ladder-bottleneck strong")).toHaveText("Zielfunktion");

    await page.getByRole("tab", { name: /Die Software-Explosion/ }).click();
    await expect(page.locator(".scenario-detail h3")).toHaveText("Die Software-Explosion");

    await page.locator("input[aria-label='Organisation']").fill("95");
    await page.locator("input[aria-label='Verifikation']").fill("20");
    await expect(page.locator(".lab-result h3")).toHaveText("Wahrheit ist der Engpass");

    const overflow = await page.evaluate(() => {
      const width = document.documentElement.clientWidth;
      return [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => {
          if (element.closest(".workshop-tabs, .ladder-track")) return false;
          const rect = element.getBoundingClientRect();
          return rect.right > width + 2 || rect.left < -2;
        })
        .map((element) => ({ tag: element.tagName, className: element.className, text: element.innerText?.slice(0, 40) }));
    });
    expect(overflow).toEqual([]);
    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(pageOverflow).toBeLessThanOrEqual(2);

    await page.locator(".icon-button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.screenshot({ path: `test-results/${viewport.name}.png`, fullPage: true });
  });
}
