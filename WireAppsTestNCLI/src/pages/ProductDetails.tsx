import React from 'react';
import {View, Text} from 'react-native';

const ProductDetailsScreen: React.FC = () => {
  const product = {
    id: 1,
    SKU: 'SKU-1',
    name: 'Product 1',
    brandName: 'Brand 1',
    mainImage: 'image-url',
    price: {amount: 10, currency: 'USD'},
    sizes: ['S', 'M', 'L'],
    stockStatus: 'In Stock',
    colour: 'Red',
    description: 'Product 1 description',
  };

  return (
    <View>
      <Text>ID: {product?.id}</Text>
      <Text>SKU: {product.SKU}</Text>
      <Text>Name: {product.name}</Text>
      <Text>Brand Name: {product.brandName}</Text>
      <Text>Main Image: {product.mainImage}</Text>
      <Text>
        Price: {product.price.amount} {product.price.currency}
      </Text>
      <Text>Sizes: {product.sizes.join(', ')}</Text>
      <Text>Stock Status: {product.stockStatus}</Text>
      <Text>Colour: {product.colour}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
