import React from 'react';
import { View, Text } from 'react-native';

// 선택한 아이템 1개를 속성으로 내려받음
const SelectedItem = ({ item }) => {
  
  
  return (
    <View>
      <Text>{item.id} {item.title}</Text>
    </View>
  )
}

export default SelectedItem;