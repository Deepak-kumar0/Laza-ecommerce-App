import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function OrderDone({ navigation }: any) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../assets/confirm.png')}
          style={styles.imageConfirm}
          resizeMode="contain"
        />

        <Text style={[styles.head, { color: colors.text || '#000' }]}>
          Order Confirmed!
        </Text>

        <Text style={styles.line}>
          Your order has been confirmed, we will send you confirmation email
          shortly.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.ordersButton}
          onPress={() => navigation.navigate('cart')}
          activeOpacity={0.8}
        >
          <Text style={styles.ordersText}>Go to Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate('main')}
          activeOpacity={0.9}
        >
          <Text style={styles.confirmText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    width: 44,
    height: 44,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  imageConfirm: {
    width: 260,
    height: 260,
    marginBottom: 20,
  },
  head: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  line: {
    fontSize: 15,
    color: '#898484',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 15,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  ordersButton: {
    backgroundColor: '#F3F3F3',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  ordersText: {
    color: '#797979',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#8B5CF6',
    height: 58,
    marginHorizontal: -20, // Extends full width at the bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});