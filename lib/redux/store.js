"use strict";

spt.react.redux = {};
const createSlice = window.RTK.createSlice;
const configureStore = window.RTK.configureStore;
const app_slice = createSlice({
  name: 'app',
  initialState: {
    tab_mode: ""
  },
  reducers: {
    set_tab_mode: (state, action) => {
      state.tab_mode = action.payload;
    }
  }
});
const appReducer = app_slice.reducer;
const {
  set_tab_mode
} = app_slice.actions;
const STORAGE_KEY = "reduxState";
const persistedState = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = configureStore({
  reducer: {
    app: appReducer
  },
  preloadedState: persistedState
});
store.subscribe(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
});
const clear_storage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
spt.react.redux.store = store;
spt.react.redux.clear_storage = clear_storage;
spt.react.redux.app = {};
spt.react.redux.app.set_tab_mode = set_tab_mode;