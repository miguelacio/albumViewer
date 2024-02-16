module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/?!(static-container)', 'jest-runner'],
};
