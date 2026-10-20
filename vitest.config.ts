import path from "node:path";
import { defineConfig } from "vitest/config";

export const TEST_DATABASE_URL = "file:./test.db";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  test: {
    environment: "node",
    globalSetup: ["./tests/global-setup.ts"],
    env: { DATABASE_URL: TEST_DATABASE_URL },
  },
});
