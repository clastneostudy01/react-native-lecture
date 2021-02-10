import React from 'react';
import { Text, View, Button } from 'react-native';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 navigation이 전달됨
const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>List</Text>
      <Button title="Go to Details" onPress={()=>{navigation.navigate("Details", {id: 1})}} />
    </View>
  )
}
export default List;