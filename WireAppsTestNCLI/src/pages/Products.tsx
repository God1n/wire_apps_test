import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../state/store';
import {fetchProductList} from '../state/product/productSlice';
import {Product} from '../../my-app';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabStackParameterList} from '../routes/BottomTabStack';
import {AppStackParameterList} from '../routes/AppStack';
import ProductCard from '../components/cards/ProductCard';

type ProductsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabStackParameterList, 'Discover'>,
  NativeStackScreenProps<AppStackParameterList>
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<any>();
  const {products} = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      item={item}
      onPress={() => {
        navigation.navigate('ProductDetails', {
          product: item,
        });
      }}
    />
  );

  const ItemSeparatorComponent = () => <View className="h-5 bg-transparent" />;
  const ListFooterComponent = () => <View className="h-20 bg-transparent" />;

  return (
    <SafeAreaView className='bg-white'>
      <Text className='ml-6 mt-2 mb-4 text-2xl text-black'>Discover our product here</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
