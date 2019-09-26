/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Megacool, MCLMegacoolConfig} from '../src';
// import {Megacool, MCLMegacoolConfig} from '@wowmaking/react-native-megacool'; // Use this import in your project instead

Megacool.start(
  Platform.select({
    ios: 'q1ZCkVCyUkqtSMwtyEkFCivpKEEUgpSBFCuVGgRbIokq+RVUhFQZ5Fek+OTnhJZmhPl7pAYUVCnV1gIA', // Set your test iOS config key
    android: 'q1ZCkVCyUkqtSMwtyEkFCivpKEEUgpSBFCt5p3inIYkqFbk4OiVmh+Z5Zxi7mTu7exsZFOYHFirV1gIA', // Set your test Android config key
  }),
  new MCLMegacoolConfig().setBaseUrl('https://foo.bar/'),
);

AppRegistry.registerComponent(appName, () => App);
