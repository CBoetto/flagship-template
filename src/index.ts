import { FSApp, FSAppTypes } from '@brandingbrand/fsapp';

import screens from './screens';
import reducers from './reducers';
import { tabBarDefault } from './styles/Navigation';
import ScreenVisibilityListener from './lib/ScreenVisibilityListener';
import {
  loadAccountData,
  loadCartData,
  loadPromoProducts,
  loadTopCategories
} from './lib/globalDataLoaders';

const projectEnv = require('../env/env');

const appConfig: FSAppTypes.AppConfigType = {
  packageJson: require('../package.json'),
  screens,
  reducers,
  env: projectEnv,
  tabs: [
    {
      screen: 'Home',
      label: 'Home',
      title: 'Home',
      icon: require('../assets/images/home-tab-icon.png')
    },
    {
      screen: 'Shop',
      label: 'Shop',
      title: 'Shop',
      icon: require('../assets/images/shop-tab-icon.png')
    },
    {
      screen: 'Cart',
      label: 'Cart',
      title: 'Cart',
      icon: require('../assets/images/cart-tab-icon.png')
    },
    {
      screen: 'Contact',
      label: 'Contact',
      title: 'Contact',
      icon: require('../assets/images/contact-tab.png')
    },
    {
      screen: 'AppBuilder',
      label: 'App Builder',
      title: 'App Builder',
      icon: require('../assets/images/contact-tab.png')
    }
  ],
  tabsStyle: tabBarDefault,
  appStyle: tabBarDefault,
  popToRootOnTabPressAndroid: true,
  devMenuScreens: [{ screen: 'Development' }]
};

const app: FSApp = new FSApp(appConfig);

export default app;

// wait for app initialized
requestAnimationFrame(loadCartData);
requestAnimationFrame(loadAccountData);
requestAnimationFrame(loadTopCategories);
requestAnimationFrame(loadPromoProducts);

const screenVisibilityListener = new ScreenVisibilityListener();
screenVisibilityListener.register();
