import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

import Home from '../../screen/home';
import Cart from '../../screen/cart';
import Wishlist from '../../screen/wishlist';
import payment from '../../screen/payment';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Home.png')}
              style={{
                width: 40,
                height: 35,
                resizeMode: 'contain',
                marginTop: 15,
                opacity: focused ? 1 : 0.5,
                tintColor: focused ? '#9775FA' : colors.muted,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/bag1.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                marginTop: 15,
                tintColor: focused ? '#9775FA' : colors.icon,
                opacity: focused ? 1 : 0.7,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/Vector (2).png')}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'contain',
                marginTop: 15,
                tintColor: focused ? '#9775FA' : colors.icon,
                opacity: focused ? 1 : 0.7,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="payment"
        component={payment}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/payment.png')}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                marginTop: 15,
                tintColor: focused ? '#9775FA' : colors.icon,
                opacity: focused ? 1 : 0.7,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
