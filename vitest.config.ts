import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: false,
      provider: "istanbul",
    },
    projects: ["packages/*/vitest.config.{ts,js,mts,mjs}"],
  },
});
