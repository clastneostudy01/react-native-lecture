import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// from 뒤에 오는건 자바스크립트 파일명
// from 디렉토리명 -> 디렉토리/index.js
// import HelloWorld from './Components/HelloWorld';
// import Counter from './Components/Counter'
// import LotsOfGreetings from './Components/LotsOfGreetings'
import SimpleList from './Components/SimpleList'

// App이 컴포넌트가 되는 것

// App 컴포넌트 시작
export default function App() {
  // JSX 문법
  // UI 템플릿을 작성하는 곳
  return (
      // 속성={값}
      // 속성={"문자열"}
      // 속성={{name:"Triple S", phone:"2234123"}}
      // 속성={객체변수}
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
// App 컴포넌트 끝


const styles = StyleSheet.create({
  container: {
    // style="display:flex;"
    flex: 1,
    backgroundColor: '#fff',
    // 세로축
    alignItems: 'center',
    // 가로축
    justifyContent: 'center',
  },
});
