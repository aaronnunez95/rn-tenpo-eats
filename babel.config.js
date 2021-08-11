module.exports = {
  plugins: [
    [
      'dotenv-import', { moduleName: '@env' }
    ],
    [
      'module-resolver',
      {
        alias: {
          '@assets'    : './src/assets',
          '@components': './src/components',
          '@lib'       : './src/lib',
          '@screens'   : './src/screens'
        },
        extensions: [ '.js', '.ios.js', '.android.js', '.svg' ],
        root      : [ './src' ]
      }
    ]
  ],
  presets: [ 'module:metro-react-native-babel-preset' ]
}
