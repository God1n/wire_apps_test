import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SizeSelector from '../SizeSelector';

describe('SizeSelector', () => {
    const sizes = ['S', 'M', 'L'];
    const selectedSize = 'M';
    const onSelectSize = jest.fn();

    it('renders the correct number of size options', () => {
        const { getAllByTestId } = render(
            <SizeSelector sizes={sizes} selectedSize={selectedSize} onSelectSize={onSelectSize} />
        );

        const sizeOptions = getAllByTestId('size-option');
        expect(sizeOptions.length).toBe(sizes.length);
    });

    it('calls onSelectSize with the selected size when a size option is pressed', () => {
        const { getByText } = render(
            <SizeSelector sizes={sizes} selectedSize={selectedSize} onSelectSize={onSelectSize} />
        );

        const sizeOption = getByText('S');
        fireEvent.press(sizeOption);

        expect(onSelectSize).toHaveBeenCalledWith('S');
    });
});