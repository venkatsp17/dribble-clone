export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // For JavaScript files
    '^.+\\.tsx?$': 'babel-jest',  // For TypeScript files (if you use TS)
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
