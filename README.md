# react-native-megacool

## Getting started

`$ npm install react-native-megacool --save`

### Mostly automatic installation

`$ react-native link react-native-megacool`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-megacool` and add `Megacool.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libMegacool.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.MegacoolPackage;` to the imports at the top of the file
  - Add `new MegacoolPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-megacool'
  	project(':react-native-megacool').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-megacool/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation project(':react-native-megacool')
  	```


## Usage
```javascript
import { Megacool } from 'react-native-megacool';

Megacool.start('CONFIG_KEY');

Megacool.startRecording();

setTimeout(() => {
  Megacool.stopRecording();
  Megacool.presentShare();
}, 1000);
```

For more, read the [API Reference](https://github.com/wowmaking/react-native-megacool/blob/master/API.md) or see the check out the [ExampleApp](https://github.com/wowmaking/react-native-megacool/blob/master/ExampleApp).