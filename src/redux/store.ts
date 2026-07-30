import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice';
import wishlistReducer from './slices/wishlist-slice';
import { persistReducer, persistStore } from 'redux-persist';
import { mmkvStorage } from './mmkvStorage';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;