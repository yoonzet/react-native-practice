import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {}, // 리덕스가 사용하는 데이터와 데이터를 변경하는 동작의 상태(state)를 나타내는 슬라이스로 구성되며 리듀서는 모든 데이터와 동작을 저장한다.
});
