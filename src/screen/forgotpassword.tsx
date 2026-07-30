import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Buttond from '../components/button';
import { useTheme } from '../context/ThemeContext';

export default function ForgotPassword({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.txt, { color: colors.text }]}>Forgot Password</Text>
      <Image
        style={{
          marginTop: 25,
          height: 270,
          width: 270,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        source={require('../assets/IMG.png')}
      />

      <Text style={[styles.tx, { color: colors.muted }]}>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
          setError('');
        }}
        style={[styles.as, { color: colors.text, borderBottomColor: colors.border }]}
        placeholderTextColor={colors.muted}
      />
      <Text style={{ color: 'red', padding: 20 }}>{error}</Text>

      <View>
        <Text style={[styles.qw, { color: colors.muted }]}>
          Please write your email to receive a confirmation code to set a new
          password.
        </Text>
      </View>
      {/* <TouchableOpacity style={styles.to}>
        <Text style={styles.cm}>Confirm Mail</Text>
      </TouchableOpacity> */}

      <Buttond
        text="Confirm Mail"
        onpress={() => {
          if (!email.trim()) {
            setError('email is required');
            return;
          }
          console.log('email', email);

          navigation.navigate('verificationcode');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  to: {
    backgroundColor: '#9775FA',
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  header: {
    marginTop: 40,
  },

  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  cm: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FEFEFE',
  },
  qw: {
    fontSize: 16,
    marginTop: 130,
    textAlign: 'center',
    fontWeight: '400',
    marginHorizontal: 35,
    color: '#b5b5b5',
  },
  tx: {
    padding: 25,
    fontSize: 15,
    color: 'grey',
    //fontWeight: '300',
    marginTop: 20,
  },
  as: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: '90%',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  txt: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 25,
    fontWeight: 'bold',
  },
});
