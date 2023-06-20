module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src/__tests__'],
  modulePathIgnorePatterns: ['<rootDir>/src/__tests__/__mocks__'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-native/extend-expect',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
