module.exports = {
  plugins: [
    [
      'dotenv-import', { moduleName: '@env' }
    ]
  ],
  presets: [ 'module:metro-react-native-babel-preset' ]
}
