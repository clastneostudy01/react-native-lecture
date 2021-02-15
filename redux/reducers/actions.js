// action 목록을 제어하는 reducer
// action.js
// redux 설명의 actions와는 무관함.

// ex)
// Like 목록을 제어하는 reducer
// likes.js

// reducer
// (현재 state, action의 return객체) => {
//   switch... case... action의 타입에 따라서 state를 제어
//   return 변경할 state
// }

const actions = (state = [], action) => {
  // action의 type별로 state를 제어하겠다
  // 만일 목록이면 [], 한 대상이면 {}

  switch (action.type) {
    case 'ADD_ACTION':
      // return 변경할 state
      // 현재의 state를 복사하여 변경

      return [
        // state 배열 요소들을 카피 
        // 배열 [{},{}]을 ...state === {}, {}
        ...state,
        // payload 객체 카피
        {
          ...action.payload
        }
      ]

    default:
      return state;
  }
}

export default actions;