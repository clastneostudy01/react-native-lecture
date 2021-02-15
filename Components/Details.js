import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import { addAction } from '../redux/actions';

import { LISTDATA } from '../shared/list';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 navigation이 전달됨
const Details = ({ route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--detail");
  // navigate로 넘어온 매개변수
  console.log(route.params);

  // const id = route.params.id;
  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);

  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.image }}>
        </Card.Image>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          {item.description}
        </Text>
        <Button
          onPress={()=>{dispatch(addAction(item))}}
          // onPress={()=>{dispatch({type: 'ADD_ACTION',payload: item})}}
          icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "tomato" }}
          title='ACTION' />
      </Card>
    </View>
  )
}
export default Details;