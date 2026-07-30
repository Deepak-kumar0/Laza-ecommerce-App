import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import Buttond from '../components/button';
import { useTheme } from '../context/ThemeContext';

export default function Welcome({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const onhandleChange = (key: 'username' | 'password', value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ marginTop: 30 }}
          source={require('../assets/Back.png')}
        />
      </TouchableOpacity>

      <Text style={[styles.txt, { color: colors.text }]}>Welcome</Text>
      <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '300', color: colors.muted }}>
        Please enter your data to continue
      </Text>

      <View style={styles.cr}>
        <Text style={[styles.as, { color: colors.muted }]}>Username</Text>
        <TextInput
          style={[styles.input, { color: colors.text, borderBottomColor: colors.border }]}
          value={form.username}
          onChangeText={text => onhandleChange('username', text)}
          placeholderTextColor={colors.muted}
        />

        <Text style={[styles.as, { color: colors.muted }]}>Password</Text>
        <TextInput
          value={form.password}
          onChangeText={text => onhandleChange('password', text)}
          style={[styles.input, { color: colors.text, borderBottomColor: colors.border }]}
          placeholderTextColor={colors.muted}
          secureTextEntry
        />
        <Text style={{ color: 'red' }}>{error}</Text>

        <Text
          style={styles.fp}
          onPress={() => navigation.navigate('forgotpassword')}
        >
          Forgot password ?
        </Text>
      </View>

      <View style={styles.sw}>
        <Text style={{ fontSize: 15, color: colors.text }}>Remember me</Text>

        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>

      <Text style={[styles.tc, { color: colors.muted }]}>
        By connecting your account confirm that you agree with our
        <Text style={{ fontWeight: 'bold', color: colors.text }}> Term and Conditions</Text>
      </Text>

      <TouchableOpacity
        onPress={() => {
    if (!form.username.trim()) {
      setError('Username is required');
      return;
    }

    if (!form.password.trim()) {
      setError('Password is required');
      return;
    }

    setError('');
    console.log(form);
    navigation.reset({
      index: 0,
      routes: [{ name: 'main' }],
    });
  }}
        style={styles.qw}
      >
        <Text
          
          style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* <Buttond text="Login"onpress={()=>navigation.navigate('home')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  qw: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9775FA',
    padding: 25,
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
  },
  tc: {
    textAlign: 'center',
    padding: 40,
    fontWeight: '300',
    marginTop: 170,
  },
  fp: {
    textAlign: 'right',
    color: 'red',
    fontSize: 17,
  },
  sw: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cr: {
    padding: 25,
    marginTop: 80,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  as: {
    fontSize: 15,
    fontWeight: '300',
  },
});
