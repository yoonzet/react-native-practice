import {createSlice} from '@reduxjs/toolkit';

//슬라이스는 redux toolkit의 기능으로 상태와 데이터 및 데이터를 변경할 수 있는 동작을 정의한다.
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    //리듀서는 상태를 변경할 때 사용하는 함수이다. 리듀서로 정의하는 모든 메서드는 자동으로 최신상태를 입력값으로 가져온다.

    //(참고) 리덕스 툴킷 없이 리덕스만 사용할때는 상태가 변경되면 안된다. 하지만 리덕스 툴킷을 사용할대는 내부적으로 상태가 알아서 처리된다.

    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
