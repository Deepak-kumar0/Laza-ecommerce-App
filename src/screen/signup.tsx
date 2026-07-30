import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Buttond from '../components/button';
import { useTheme } from '../context/ThemeContext';

export default function Signup({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(true);
  const [istick, setIsTick] = useState(false);




  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });

  // const [error, setError] = useState({
  //   username: '',
  //   password: '',
  //   email: '',
  // });

  const onHandleChange = (
    key: 'username' | 'password' | 'email',
    value: string,
  ) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));

    // setError(prev => ({
    //   ...prev,
    //   [key]: '',
    // }));
     if(key==='username'){
       setIsTick(value.length>6)
     }
  };
  const handleSignup = () => {
    // setUsername(form?.username)
    // const newErrors = {
    //   username: '',
    //   password: '',
    //   email: '',
    // };

    // if (!form.username.trim()) {
    //   newErrors.username = 'Username is required';
    // }

    // if (!form.password.trim()) {
    //   newErrors.password = 'Password is required';
    // }

    // if (!form.email.trim()) {
    //   newErrors.email = 'Email is required';
    // }

    // setError(newErrors);

    // if (newErrors.username || newErrors.password || newErrors.email) {
    //   return;
    //}

    console.log(form);
    navigation.reset({
      index: 0,
      routes: [{ name: 'main' }],
    });
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
      <Text style={[styles.title, { color: colors.text }]}>Sign Up</Text>

      <View style={styles.form}>
        <Text style={[styles.label, { color: colors.muted }]}>Username</Text>

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderBottomColor: colors.border },
          ]}
          placeholder="Enter username"
          placeholderTextColor={colors.muted}
          value={form.username}
          onChangeText={text => onHandleChange('username', text)}
        />
        {istick ? (
          <Text style={{ color: colors.muted }}>tick</Text>
        ) : (
          <Text style={{ color: colors.muted }}>untick</Text>
        )}

        <Text style={[styles.label, { color: colors.muted }]}>Password</Text>

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderBottomColor: colors.border },
          ]}
          placeholder="Enter password"
          placeholderTextColor={colors.muted}
          secureTextEntry
          value={form.password}
          onChangeText={text => onHandleChange('password', text)}
        />

        <Text style={[styles.label, { color: colors.muted }]}>Email Address</Text>

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderBottomColor: colors.border },
          ]}
          placeholder="Enter email"
          placeholderTextColor={colors.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={text => onHandleChange('email', text)}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.remember, { color: colors.text }]}>Remember me</Text>

        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
          trackColor={{
            false: '#D9D9D9',
            true: '#4CD964',
          }}
          thumbColor="#fff"
        />
      </View>

      <Buttond text="Sign Up" onpress={handleSignup} />
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

  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 15,
  },

  form: {
    marginTop: 190,
    paddingHorizontal:10,
  },

  label: {
    color: '#9B9B9B',
    fontSize: 13,
    marginBottom: 6,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 8,
    color: '#222',
  },

  error: {
    color: 'red',
    fontSize: 11,
    marginTop: 2,
    marginBottom: 12,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:15,
    
  },

  remember: {
    fontSize: 14,
    color: '#000',
  },
});
