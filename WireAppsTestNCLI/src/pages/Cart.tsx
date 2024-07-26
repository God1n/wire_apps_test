import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';

const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const cartItems = [
    {id: 1, name: 'Item 1', price: 10},
    {id: 2, name: 'Item 2', price: 20},
    {id: 3, name: 'Item 3', price: 30},
  ];

  return (
    <View>
      <Text>Cart Screen</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}
      />
    </View>
  );
};

export default CartScreen;
