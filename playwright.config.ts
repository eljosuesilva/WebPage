import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "technology.spec.ts",
  timeout: 60_000,
  expect: {
    timeout: 8_000,
  },
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173/technology",
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
