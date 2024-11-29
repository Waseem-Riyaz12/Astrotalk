/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreLogs([
  'Support for defaultProps will be removed', // Warning to suppress
]);

AppRegistry.registerComponent(appName, () => App);
