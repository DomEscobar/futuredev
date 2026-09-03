import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  use: {
    baseURL: "http://127.0.0.1:4179",
    browserName: "chromium",
    colorScheme: "dark",
  },
  webServer: {
    command: "npm run preview -- --port 4179",
    url: "http://127.0.0.1:4179",
    reuseExistingServer: false,
  },
});
