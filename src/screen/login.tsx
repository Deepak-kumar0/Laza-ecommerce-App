import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Buttond from '../components/button';
import { useTheme } from '../context/ThemeContext';

export default function Login({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

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

      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Let's Get Started</Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Image
            source={require('../assets/Facebook.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.twitter]}>
          <Image
            source={require('../assets/Twitter.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Image source={require('../assets/Google.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={[styles.normalText, { color: colors.muted }]}>
          Already have an account?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
          <Text style={[styles.signinText, { color: colors.text }]}> Signin</Text>
        </TouchableOpacity>
      </View>

      <Buttond
        text="Create an Account"
        onpress={() => navigation.navigate('signup')}
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
    paddingHorizontal: 20,
  },

  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  titleContainer: {
    marginTop: 35,
    alignItems: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#222',
  },

  socialContainer: {
    marginTop: 190,
    paddingHorizontal: 20,
  },

  socialButton: {
    height: 58,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  facebook: {
    backgroundColor: '#4267B2',
  },

  twitter: {
    backgroundColor: '#1DA1F2',
  },

  google: {
    backgroundColor: '#EA4335',
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 100,
  },

  normalText: {
    color: '#9A9A9A',
    fontSize: 17,
  },

  signinText: {
    color: '#222',
    fontSize: 17,
    fontWeight: '700',
  },
});
