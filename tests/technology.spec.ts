import { expect, test } from "playwright/test";

const SECTION_IDS = [
  "index",
  "lgm-vs-llm",
  "data-collection",
  "fusing",
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

  test("sidebar keeps index active and updates active marker on scroll", async ({ page }) => {
    await page.goto("/technology");

    const sidebar = page.getByLabel("Technology section index");
    const indexLink = sidebar.getByRole("link", { name: "Index" });
    await expect(indexLink).toHaveAttribute("aria-current", "page");

    await page.locator("#core-reasoning").scrollIntoViewIfNeeded();

    const coreReasoningLink = sidebar.getByRole("link", { name: "Core Reasoning" });
    await expect(coreReasoningLink).toHaveAttribute("aria-current", "page");
  });

  test("supports sidebar hash navigation", async ({ page }) => {
    await page.goto("/technology");

    const sidebar = page.getByLabel("Technology section index");
    const dataCollectionLink = sidebar.getByRole("link", { name: "Data Collection" });
    await dataCollectionLink.click();

    await expect(page).toHaveURL(/#data-collection$/);
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
