import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        reporters: ["default", "json"],
        environment: "jsdom",
        globals: true,
        setupFiles: "./vitest.setup.ts",
        outputFile: "vitest-report.json",
    },
});
