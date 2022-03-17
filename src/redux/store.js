import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import reducer from './contacts/reducer';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
const persistConfig = {
  key: 'phone-book',
  storage,
  blacklist: ['filter']
};
const middleware = [
  ...getDefaultMiddleware({serializableCheck: {ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
];
const store = configureStore({
  reducer: {contacts: persistReducer(persistConfig, reducer)},
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

export default { store, persistor };
