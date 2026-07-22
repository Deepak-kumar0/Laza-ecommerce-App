import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

type btn = {
  text: string;
  onpress?: () => void;
};

export default function Buttond({ text, onpress }: btn) {
  return (
    <TouchableOpacity style={styles.ca} onPress={onpress}>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ca: {
    backgroundColor: '#9775FA',
    alignItems: 'center',
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    justifyContent: 'center',
    paddingVertical: 16,
    marginTop: 16,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
