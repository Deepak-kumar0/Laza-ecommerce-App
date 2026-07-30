import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserProvider } from './src/context/user-context';
import StackNavigation from './src/navigation/stackNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from './src/context/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
 const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();

    console.log('FCM TOKEN:', token);

    return token;
  } catch (e) {
    console.log(e);
  }
};
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <UserProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <NavigationContainer>
                <StackNavigation />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </UserProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
