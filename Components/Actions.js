import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
const Actions = () => {
  // store의 특정(actions) state를 선택
  const actions = useSelector(state => state.actions);
  console.log(actions);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
        {
          actions.map((item, i) => (
            <ListItem containerStyle={{ width: "80%" }} key={i}>
              <Avatar source={{ uri: item.image }} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Actions;