import React, {useState, useCallback} from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SelectedItem from './SelectedItem'

const simpleData = [
  {id:1, title:"Lorem ipsum dolor sit amet"},
  {id:2, title:"consectetur adipiscing elit, sed do eiusmod tempor"},
  {id:3, title:"incididunt ut labore et dolore magna aliqua"}
]
const SimpleList = () => {
  const [item, setItem] = useState({});
  
  // memoizing: 컴포넌트가 리로딩될때마다 내부의 모든게 새로 생성되는걸 막기 위한 기능
  // const 함수명 = uesCallback(함수 본체, [감지할 변수])
  // 감지할 변수값이 바뀔때마다 함수가 재생성되게 함.
  // 빈 배열이라면 컴포넌트가 처음 생성될 때에만 함수가 생성.
  const itemPressed = useCallback((data) => {
    console.log(data);
    setItem(data);
  }, []);

  // useCallback 내부의 함수 내용은 이와 같은 셈임.
  // 다른 점은 = useCallBack 내부에 묶어준다는 점.
  
  // const itemPressed = (data) => {
  //   console.log(data);
  //   setItem(data);
  // }

  return (
    <View
      style={{
       flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
   >
      {/* JSX Element에 코드를 삽입하려면 {} 중괄호를 삽입 */}
      {
        // array.map 함수는 원래 배열 요소의 개수만큼 요소를 변경하여 리턴
        // JSX.Element를 리턴함
        // {}, {}, {}
        // <>, <>, <>
        simpleData.map(data => {
          return (
            // TouchableOpacity: 터치가 가능한 투명한 영역
            <TouchableOpacity key={data.id} onPress={()=>itemPressed(data)}>
            <Text>{data.id} {data.title}</Text>
            </TouchableOpacity>
          )
        })
      }

    <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>
    <SelectedItem item={item}></SelectedItem>
    </View>
  )
}

export default SimpleList;