/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsScreen from '../pages/Products';
import CartScreeen from '../pages/Cart';
import BottomTabBarOne from '../components/elements/BottomTabsOne/BottomTabsOne';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabsIconMap} from '../components/elements/elementTypes';
import {AppStackParameterList} from './AppStack';

export type BottomTabStackParameterList = {
  Products: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<BottomTabStackParameterList>();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};

const iconList: BottomTabsIconMap = {
  Products: {
    name: 'view-list',
    group: 'MaterialCommunityIcons',
  },
  Cart: {
    name: 'cart',
    group: 'MaterialCommunityIcons',
  },
};

const BottomTabStack: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'BottomTabs'>
> = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <BottomTabBarOne icons={iconList} {...props} />}>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreeen} />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
