import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import VectorIcon from '../elements/VectorIcon/VectorIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabStackParameterList} from '../../routes/BottomTabStack';
import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';

const HeaderRightButton: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<BottomTabStackParameterList>>();

  const onPress = () => {
    navigation.navigate('Cart');
  };

  const {items} = useSelector((state: RootState) => state.cart);

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-quinary w-7 h-7 flex items-center justify-center rounded-md ${
        !items.length && 'hidden'
      }`}>
      <VectorIcon
        className="text-white"
        name="cart"
        type="MaterialCommunityIcons"
        size={20}
      />
      <View
        className={`absolute top-[-8px] right-[-8px] bg-septenary w-4 h-4 rounded-full  flex items-center justify-center ml-8`}>
        <Text className="text-white text-xs text-center">{items.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
