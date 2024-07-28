import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FloatingActionButton from '../FloatingActionButton';

describe('FloatingActionButton', () => {
  it('renders correctly when not hidden', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <FloatingActionButton
        hidden={false}
        onPress={onPressMock}
        testID="floating-action-button"
      />,
    );
    const floatingActionButton = getByTestId('floating-action-button');
    expect(floatingActionButton).toBeTruthy();
  });

  it('renders correctly when hidden', () => {
    const onPressMock = jest.fn();
    const {queryByTestId} = render(
      <FloatingActionButton hidden={true} onPress={onPressMock} />,
    );
    const floatingActionButton = queryByTestId('floating-action-button');
    expect(floatingActionButton).toBeNull();
  });

  it('calls onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <FloatingActionButton
        hidden={false}
        onPress={onPressMock}
        testID="floating-action-button"
      />,
    );
    const floatingActionButton = getByTestId('floating-action-button');
    fireEvent.press(floatingActionButton);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
