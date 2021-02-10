import React from 'react';
import { Text, View, Button } from 'react-native';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Button title="Go to Details" onPress={()=>{navigation.navigate("Details", {id: 1})}} />
    </View>
  )
}
export default Home;