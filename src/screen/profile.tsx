import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Profile({ navigation }: any) {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.closeDrawer?.()}
          >
            <Image
              source={require('../assets/Menu (1).png')}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image
            style={styles.avatar}
            source={require('../assets/profile.png')}
            resizeMode="cover"
          />

          <View style={styles.profileDetails}>
            <Text style={[styles.userName, { color: colors.text }]}>Mr Mou</Text>
            <View style={styles.verifiedRow}>
              <Text style={[styles.verifiedText, { color: colors.muted }]}>
                verified Profile
              </Text>
              <Image
                source={require('../assets/verify.png')}
                style={styles.verifyBadge}
                resizeMode="contain"
              />
            </View>
          </View>

          <TouchableOpacity
            style={[styles.orderBadge, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.orderBadgeText, { color: colors.muted }]}>
              3 orders
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuList}>
          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Image
                style={[styles.itemIcon, { tintColor: colors.icon }]}
                source={require('../assets/sun.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ true: '#16a2148f', false: '#E0E0E0' }}
              thumbColor="#FFFFFF"
              style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('account')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                style={[styles.itemIcon, { tintColor: colors.icon }]}
                source={require('../assets/Info.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>
                Account Information
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('newpassword')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                style={[styles.itemIcon, { tintColor: colors.icon }]}
                source={require('../assets/lock.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                style={styles.itemIcon}
                source={require('../assets/Cart.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>Order</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('payment')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                style={[styles.itemIcon, { tintColor: colors.icon }]}
                source={require('../assets/Wallet.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>My Cards</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('wishlist')}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Image
                style={[styles.itemIcon, { tintColor: colors.icon }]}
                source={require('../assets/Heart.png')}
                resizeMode="contain"
              />
              <Text style={[styles.itemText, { color: colors.text }]}>Wishlist</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.logoutMargin]}
            onPress={() => navigation.navigate('login')}
          >
            <View style={styles.menuLeft}>
              <Image
                style={styles.itemIcon}
                source={require('../assets/Logout.png')}
                resizeMode="contain"
              />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    marginTop: 15,
    marginBottom: 25,
  },
  backButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  verifiedText: {
    fontSize: 15,
    marginRight: 6,
  },
  verifyBadge: {
    width: 16,
    height: 16,
  },
  orderBadge: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  orderBadgeText: {
    fontSize: 15,
    fontWeight: '600',
  },
  menuList: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 28,
    height: 28,
    marginRight: 18,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  logoutMargin: {
    marginTop: 145,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF3B30',
  },
});
