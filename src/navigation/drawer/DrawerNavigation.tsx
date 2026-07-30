import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../../screen/profile';
import TabNavigation from '../bottomtabs/tabNavigation';
import { useTheme } from '../../context/ThemeContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <Profile {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '85%',
          backgroundColor: colors.background,
        },
      }}
    >
      <Drawer.Screen name="Tabnavigation" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
