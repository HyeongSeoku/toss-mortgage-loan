module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest'],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^(pages|_tosslib)/(.*)': '<rootDir>/src/$1/$2',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 10000,
};
