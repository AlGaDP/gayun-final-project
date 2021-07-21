import { createSlice } from "@reduxjs/toolkit";
import { take, takeEvery, put, select, call } from 'redux-saga/effects';

export const namespace = 'categorySaga';

const slice = createSlice({
  name: namespace,
  initialState: {
    isOpen: false,
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {
    loadStart: (state, action) => {
      state.isLoading = true;
    },
    loadEnd: (state, action) => {
      let { payload: { data = [], error = null } } = action;
      state.isLoading = false;
      state.data = data;
      state.error = error;
    },
    load: (s, a) => { },
  },
});

export const { loadStart, loadEnd, setIsOpen, load } = slice.actions;

export const reducer = slice.reducer;
export default reducer;

export const selectIsLoading = (s) => s[namespace].isLoading;
export const selectData = (s) => s[namespace].data;
export const selectError = (s) => s[namespace].error;

function* loadDataSaga() {
  yield put(loadStart());

  let error = null,
    data = [];

  try {
    let response = yield call(fetch, "https://60d6c6a9307c300017a5f4af.mockapi.io/catalog");
    data = yield call(() => response.json());
  } catch (e) {
    error = e.message;
  }

  yield put(loadEnd({
    data,
    error,
  }));
}

export function* sagas() {
  yield takeEvery(load, loadDataSaga);
}