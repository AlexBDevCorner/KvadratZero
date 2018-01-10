module.exports = {
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform : {
      "^.+\\.(js)$": "<rootDir>/node_modules/webpack-babel-jest"
  }
}
