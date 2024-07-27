import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from '../pages/ProductDetails';
import BottomTabStack from './BottomTabStack';
import {Product} from '../../my-app';
import {TouchableOpacity} from 'react-native';
import VectorIcon from '../components/elements/VectorIcon/VectorIcon';
import HeaderRightButton from '../components/buttons/HeaderRightButton';

export type AppStackParameterList = {
  BottomTabs: undefined;
  ProductDetails: {product: Product};
};

const Stack = createNativeStackNavigator<AppStackParameterList>();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabs" component={BottomTabStack} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'card'}}>
          <Stack.Screen
            options={{
              headerTitle: 'Product Details',
              headerBackTitleVisible: false,
              headerRight: () => <HeaderRightButton />,
            }}
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
