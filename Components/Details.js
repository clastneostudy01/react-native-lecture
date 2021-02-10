import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 navigation이 전달됨
const Details = ( { route, navigation } ) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--detail");
  // navigate로 넘어온 매개변수
  console.log(route.params);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Details!</Text>
    </View>
  )
}
export default Details;