import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, FlatList, Alert, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomTabStackParameterList} from '../routes/BottomTabStack';
import {AppStackParameterList} from '../routes/AppStack';
import {useSelector} from 'react-redux';
import {RootState} from '../state/store';
import CartItemCard from '../components/cards/CartItemCard';
import ActionButton from '../components/buttons/ActionButton';

type ProductsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabStackParameterList, 'Cart'>,
  NativeStackScreenProps<AppStackParameterList>
>;

const CartScreen: React.FC<ProductsScreenProps> = ({navigation}) => {
  const {items} = useSelector((state: RootState) => state.cart);
  const {products} = useSelector((state: RootState) => state.product);

  const onPressInfo = (id: string) => {
    const product = products.find(product => product.id === id);
    if (product) {
      navigation.navigate('ProductDetails', {
        product,
      });
    } else {
      Alert.alert('Product not found', 'The product is not available');
    }
  };

  const getTotalAmount = () => {
    let total = 0;
    let currency = '';
    items.forEach(item => {
      total += Number.parseFloat(item.price.amount) * item.quantity;
      currency = item.price.currency;
    });
    return {amount: total, currency};
  };

  return (
    <SafeAreaView className="pb-[56px]">
      <Text className="ml-6 mt-2 mb-4 text-2xl text-black">Cart Items</Text>
      <FlatList
        data={items}
        className="w-full h-[90%]"
        keyExtractor={item => item.id + item.size}
        renderItem={({item}) => (
          <CartItemCard
            item={item}
            onPressInfo={() => {
              onPressInfo(item.id);
            }}
          />
        )}
      />
      <View className="w-full h-[10%] bg-tertiary flex flex-row items-center justify-around">
        <Text className="text-black text-base">
          Total Price: {getTotalAmount().amount.toFixed(2)}{' '}
          {getTotalAmount().currency}
        </Text>
        <ActionButton label="Checkout" />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
