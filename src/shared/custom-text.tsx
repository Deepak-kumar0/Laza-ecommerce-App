import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props={
    text:string
}

export default function CustomText({text}:Props) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize:18,
  },
});
