import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["./jest.setup.mjs"],
  testEnvironment: "jest-environment-jsdom",
};

// https://github.com/chakra-ui/chakra-ui/issues/6036#issuecomment-1128368254
export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"]

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
