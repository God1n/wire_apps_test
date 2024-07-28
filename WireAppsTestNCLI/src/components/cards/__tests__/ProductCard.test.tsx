import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductCard from '../ProductCard';
import {mockProducts} from '../../../constants/mockValues';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 10.99,
    image: 'test-image.jpg',
  };

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <ProductCard item={mockProducts[0]} onPress={onPressMock} />,
    );

    const cardElement = getByTestId('product-card');
    fireEvent.press(cardElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
