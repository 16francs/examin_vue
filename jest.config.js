module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/app/$1',
    '^~~/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    '<rootDir>/app/components/**/*.{js,vue}',
    '<rootDir>/app/layouts/**/*.{js,vue}',
    '<rootDir>/app/pages/**/*.{js,vue}',
    '<rootDir>/app/store/**/*.{js,vue}'
  ]
}
