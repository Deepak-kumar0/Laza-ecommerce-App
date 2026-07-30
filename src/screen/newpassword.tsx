import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Buttond from '../components/button';
import { useTheme } from '../context/ThemeContext';

export default function NewPassword({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [form, setForm] = useState({
    password: '',
    newPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (key: 'password' | 'newPassword', value: string) => {
    const updatedForm = {
      ...form,
      [key]: value,
    };

    setForm(updatedForm);

    if (updatedForm.password === '' || updatedForm.newPassword === '') {
      setError('');
    } else if (updatedForm.password !== updatedForm.newPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

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
      <Text style={[styles.txt, { color: colors.text }]}>New Password</Text>

      <View style={styles.cr}>
        <Text style={[styles.as, { color: colors.muted }]}>Password</Text>
        <TextInput
          value={form.password}
          onChangeText={text => handleChange('password', text)}
          style={[styles.input, { color: colors.text, borderBottomColor: colors.border }]}
          placeholderTextColor={colors.muted}
          secureTextEntry
        />

        <Text style={[styles.as, { color: colors.muted }]}>Confirm Password</Text>
        <TextInput
          value={form.newPassword}
          onChangeText={text => handleChange('newPassword', text)}
          style={[styles.input, { color: colors.text, borderBottomColor: colors.border }]}
          placeholderTextColor={colors.muted}
          secureTextEntry
        />
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>

      <Text style={[styles.qw, { color: colors.muted }]}>
        Please write your new password
      </Text>
      <Buttond
        text="Reset Password"
        onpress={() => {
          if (form.password === form.newPassword) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'main' }],
            });
          } else {
            setError('Password not match');
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
  },

  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  qw: {
    textAlign: 'center',
    marginTop: 180,
    fontSize: 16,
    color: '#8F959E',
    //fontWeight: 'bold',
  },
  cr: {
    padding: 25,
    marginTop: 200,
  },
  as: {
    color:'#D3D3D3',
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  txt: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 25,
    fontWeight: 'bold',
  },
});
