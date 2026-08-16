const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },

  jest: {
    configure: {
      moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@routes/(.*)$": "<rootDir>/src/routes/$1",
        "^@styles/(.*)$": "<rootDir>/src/styles/$1",
        "^@lib/(.*)$": "<rootDir>/src/lib/$1",
        "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
      },
    },
  },
};
