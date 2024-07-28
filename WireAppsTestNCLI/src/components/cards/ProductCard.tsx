import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Product} from '../../../my-app';

interface iProductCardProps {
  item: Product;
  onPress: () => void;
}

const ProductCard: React.FC<iProductCardProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      testID="product-card"
      className="mx-5 bg-primary rounded-2xl android:shadow-2xl ios:shadow-md flex items-start justify-start flex-col overflow-hidden"
      onPress={onPress}>
      <View className="flex flex-row w-full items-center justify-center">
        <View className="flex-[0.5]">
          <Image
            className="w-40 h-40 p-5"
            source={{uri: item.mainImage}}
            resizeMode="contain"
          />
        </View>
        <View className="flex-[0.5] flex-col items-start justify-center">
          <Text className="text-black text-lg font-semibold">{item.name}</Text>
          <Text className="text-black font-bold">
            {item.price.amount}{' '}
            <Text className="text-black">{item.price.currency}</Text>
          </Text>
        </View>
      </View>
      <View
        className={`absolute top-16 right-[-40px] rotate-[50deg] w-72 h-10 bg-senary opacity-60 items-center justify-center ${
          item.stockStatus === 'IN STOCK' && 'hidden'
        }`}>
        <Text className="text-white text-lg font-bold">OUT OF STOCK</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
