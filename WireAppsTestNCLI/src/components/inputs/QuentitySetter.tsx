import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface QuentitySetterProps {
  quentity: number;
  setQuentity: (quentity: number) => void;
  stockStatus: string;
}

const QuentitySetter: React.FC<QuentitySetterProps> = ({
  quentity,
  setQuentity,
  stockStatus,
}) => {
  const onPressPlus = () => {
    setQuentity(quentity + 1);
  };
  const onPressMinus = () => {
    if (quentity === 1) {
      return;
    }
    setQuentity(quentity - 1);
  };
  return (
    <View className="flex flex-row items-center justify-start">
      <Text className="text-lg mt-2 text-black">
        Quantity: {stockStatus !== 'IN STOCK' ? 'Unavalable' : ''}
      </Text>
      <View
        className={`flex flex-row items-center justify-center gap-2 ${
          stockStatus !== 'IN STOCK' && 'hidden'
        }`}>
        <TouchableOpacity
          className={`w-8 h-8 items-center justify-center rounded-sm ${'bg-quatanary'}`}
          onPress={onPressMinus}>
          <Text className={`${'text-black text-lg'}`}>-</Text>
        </TouchableOpacity>
        <Text className="text-black text-lg">{quentity}</Text>
        <TouchableOpacity
          className={`w-8 h-8 items-center justify-center rounded-sm ${'bg-quatanary'}`}
          onPress={onPressPlus}>
          <Text className={`${'text-black text-lg'}`}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuentitySetter;
