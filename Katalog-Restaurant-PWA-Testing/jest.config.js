// jest.config.js
module.exports = {
  testMatch: ['**/specs/**/*Spec.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};
