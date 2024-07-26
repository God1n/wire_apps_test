import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

const ProductsScreen: React.FC = () => {
    const renderItem = ({ item }: { item: Product }) => (
        <View>
            <Text className='px-20 py-10'>{item.name}</Text>
            <Text>{item.price}</Text>
        </View>
    );

    return (
        <View>
            <Text>List of Products</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default ProductsScreen;