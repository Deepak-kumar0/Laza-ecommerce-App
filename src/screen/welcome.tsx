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

export default function welcome({ navigation }: { navigation: any }) {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ marginTop: 30 }}
          source={require('../assets/Back.png')}
        />
      </TouchableOpacity>

      <Text style={styles.txt}>Welcome</Text>
      <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '300' }}>
        Please enter your data to continue
      </Text>

      <View style={styles.cr}>
        <Text style={styles.as}>Username</Text>
        <TextInput
          style={styles.input}
          value={form.username}
          onChangeText={text => onhandleChange('username', text)}
        />

        <Text style={styles.as}>Password</Text>
        <TextInput
          value={form.password}
          onChangeText={text => onhandleChange('password', text)}
          style={styles.input}
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
        <Text style={{ fontSize: 15 }}>Remember me</Text>

        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>

      <Text style={styles.tc}>
        By connecting your account confirm that you agree with our
        <Text style={{ fontWeight: 'bold' }}> Term and Conditions</Text>
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
    navigation.navigate('home');
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
