/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsScreen from '../pages/Products';
import CartScreeen from '../pages/Cart';
import BottomTabBarOne from '../components/elements/BottomTabsOne/BottomTabsOne';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabsIconMap} from '../components/elements/elementTypes';
import {AppStackParameterList} from './AppStack';
import {useSelector} from 'react-redux';
import {RootState} from '../state/store';

export type BottomTabStackParameterList = {
  Discover: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<BottomTabStackParameterList>();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};

const iconList: BottomTabsIconMap = {
  Discover: {
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
  const {items} = useSelector((state: RootState) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <BottomTabBarOne icons={iconList} {...props} />}>
      <Tab.Screen name="Discover" component={ProductsScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreeen}
        options={{
          tabBarBadge: items.length,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
