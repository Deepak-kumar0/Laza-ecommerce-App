import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../../screen/home';
import Cart from '../../screen/cart';
import Wishlist from '../../screen/wishlist';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
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
              source={require('../../assets/Cart.png')}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                marginTop: 15,
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
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
