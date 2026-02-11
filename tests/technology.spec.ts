import { expect, test } from "playwright/test";

const SECTION_IDS = [
  "index",
  "lgm-vs-llm",
  "data-collection",
  "fusing",
  "database-visual",
  "grid-intro",
  "grid-full",
  "grid-article",
  "core-reasoning",
  "genlayers",
  "research-blog",
  "dynamic-layers",
  "careers",
  "hiring-humans",
] as const;

test.describe("Technology page", () => {
  test("renders sections in the expected order", async ({ page }) => {
    await page.goto("/technology");

    for (const id of SECTION_IDS) {
      await expect(page.locator(`section#${id}`)).toHaveCount(1);
    }

    const indexes = await page.evaluate((ids) => {
      return ids.map((id) => {
        const element = document.getElementById(id);
        if (!element) return -1;

        const sections = Array.from(document.querySelectorAll("section[id]"));
        return sections.indexOf(element as HTMLElement);
      });
    }, SECTION_IDS);

    expect(indexes.every((value) => value >= 0)).toBeTruthy();

    const isOrdered = indexes.every((value, index, array) => {
      if (index === 0) return true;
      return value > array[index - 1];
    });

    expect(isOrdered).toBeTruthy();
  });

  test("supports sidebar hash navigation and active state", async ({ page }) => {
    await page.goto("/technology");

    const dataCollectionLink = page.getByRole("link", { name: /Data Collection/i }).first();
    await dataCollectionLink.click();
    await expect(page).toHaveURL(/#data-collection$/);

    await page.locator("#core-reasoning").scrollIntoViewIfNeeded();
    const coreReasoningLink = page.getByRole("link", { name: /Core Reasoning/i }).first();
    await expect(coreReasoningLink).toContainText("+");
  });

  test("hides sidebar on full-bleed sections", async ({ page }) => {
    await page.goto("/technology");

    await page.locator("#grid-full").scrollIntoViewIfNeeded();

    const sidebar = page.locator("aside").first();
    await expect(sidebar).toHaveAttribute("aria-hidden", "true");
  });

  test("careers form is configured with client validation and mailto", async ({ page }) => {
    await page.goto("/technology");

    const form = page.locator('form[action^="mailto:contact@columbus.earth"]');
    await expect(form).toHaveCount(1);

    const nameInput = form.locator('input[name="name"]');
    const emailInput = form.locator('input[name="email"]');

    await expect(nameInput).toHaveAttribute("required", "");
    await expect(emailInput).toHaveAttribute("required", "");
    await expect(emailInput).toHaveAttribute("type", "email");

    const action = await form.getAttribute("action");
    expect(action).toContain("mailto:contact@columbus.earth");
  });
});
