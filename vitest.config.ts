import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom", // ambiente para testes React
        globals: true, // para usar globals tipo `describe`, `it`, `expect`
        setupFiles: "./vitest.setup.ts", // arquivo para configurar jest-dom etc
    },
});
