import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor:'#9775FA'}}>
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 300,
          resizeMode: 'contain',
        }}
        source={require('../assets/Logo.png')}
      />
    </View>
  );
}
