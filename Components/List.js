import React from 'react';
import { Text, View, Button } from 'react-native';
import { LISTDATA } from '../shared/list';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

// 함수의 리턴값이 JSX.Element면 React Component가 된다.
// JSX를 쓰려면 import React from 'react';가 포함되어 있어야 한다.
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 navigation이 전달됨

const List = ({ navigation }) => {

  const list = LISTDATA;
  console.log(list);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle ={{ flexGrow:1, alignItems:"center", justifyContent:"center"}}>
        {
          list.map((item, i) =>(
            <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
              <Avatar source={{uri: item.image}} />
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
export default List;