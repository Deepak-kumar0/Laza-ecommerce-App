import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserProvider } from './src/context/user-context';
import StackNavigation from './src/navigation/stackNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </UserProvider>
  );
}
