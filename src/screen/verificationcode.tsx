import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Buttond from '../components/button';

export default function VerificationCode({ navigation }: { navigation: any }) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1) {
      switch (index) {
        case 0:
          input2.current?.focus();
          break;
        case 1:
          input3.current?.focus();
          break;
        case 2:
          input4.current?.focus();
          break;
      }
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      switch (index) {
        case 1:
          input1.current?.focus();
          break;
        case 2:
          input2.current?.focus();
          break;
        case 3:
          input3.current?.focus();
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Verification Code</Text>
      <Image
        style={{
          marginTop:50,
          height: 270,
          width: 270,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        source={require('../assets/IMG.png')}
      />

      <View style={styles.verificationcontainer}>
        <TextInput
          ref={input1}
          style={styles.otp}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[0]}
          onChangeText={text => handleChange(text, 0)}
          onKeyPress={e => handleBackspace(e, 0)}
        />
        <TextInput
          ref={input2}
          style={styles.otp}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[1]}
          onChangeText={text => handleChange(text, 1)}
          onKeyPress={e => handleBackspace(e, 1)}
        />
        <TextInput
          ref={input3}
          style={styles.otp}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[2]}
          onChangeText={text => handleChange(text, 2)}
          onKeyPress={e => handleBackspace(e, 2)}
        />
        <TextInput
          ref={input4}
          style={styles.otp}
          keyboardType="number-pad"
          maxLength={1}
          value={otp[3]}
          onChangeText={text => handleChange(text, 3)}
          onKeyPress={e => handleBackspace(e, 3)}
        />
      </View>

      <Text style={styles.timer}>
        00:20 <Text style={{ color: '#999' }}>resend confirmation code</Text>
      </Text>

      <Buttond
        text="Confirm Code"
        onpress={() => navigation.navigate('newpassword')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal:10,
    backgroundColor:'#fff'
  },
   header: {
    marginTop: 40,
  },

  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  timer: {
    marginTop: 180,
    alignSelf: 'center',
  },
  verificationcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
  },
  otp: {
    borderWidth: 1,
    height: 100,
    width: 80,
    borderColor: 'grey',
    borderRadius: 10,
    fontSize: 25,
    textAlign: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
