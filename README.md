<p align="center">
  <a href="https://reactnative.dev/" target="_blank">
    <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" width="300">
  </a>
</p>

# Tenpo Test App

## Outstanding Dependencies:

#### Common
1. react-spring
2. react-native-elements
3. react-native-svg
4. react-native-vector-icons

#### Development
1. @babel/core
2. @babel/eslint-parser
3. babel-plugin-dotenv-import
4. babel-plugin-module-resolver
5. husky
6. lint-staged
7. react-native-svg-transformer

## Development

- `git clone REPOSITORY_LINK` # Clone the repository
- `cd rn-tenpo-eats`
- `cp .env.example .env` # Copy the enviroment file and put values for development 
- `yarn` or `npm install` # Install dependencies, We recommend working with yarn
- `npx pod-install` # Install Pod dependencies for iOS (only for Mac)

##### Android

Ensure that you have a valid Android SDK installation

* Android SDK
* Android SDK Platform
* Android Virtual Device

- Open `rn-tenpo-eats/android` in Android Studio
- Start a emulator (quickest way to get started) or connect a real device.
- `npx react-native run-android`

##### iOS

Have XCode installed

- `npx react-native run-ios`

or

- Open the `rn-tenpo-eats/ios` workspace in Xcode or run `xed -b ios`
- Hit the Run button 

## Run tests

- `yarn test` or `npm test`