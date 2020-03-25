module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|vtt)$': 'jest-transform-stub',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [`/node_modules/(!lodash-es)`, '<rootDir>/node_modules/'],
}
