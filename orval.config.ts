import { defineConfig } from "orval";

export default defineConfig({
  backend: {
    output: {
      mode: "tags-split",
      target: "src/api/backend.ts",
      schemas: "src/api/model",
      client: "react-query",
      baseUrl: "http://localhost:3000/api",
      mock: true,
    },
    input: {
      target: "docs/schema/swagger.json",
    },
  },
});
