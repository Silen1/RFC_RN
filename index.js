/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/login/Splash'
import Browse from './src/login/Browse'

AppRegistry.registerComponent(appName, () => Browse);
 