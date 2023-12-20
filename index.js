/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainRoot from './src/navigator/MainRoot';

AppRegistry.registerComponent(appName, () => MainRoot);
