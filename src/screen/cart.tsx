import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../redux/slices/cart-slice';
import { useTheme } from '../context/ThemeContext';

export default function Cart({ navigation }: any) {
  const cart = useSelector((state: RootState) => state?.cart?.cart) || [];
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = cart.length > 0 ? 10 : 0;
  const total = subtotal + shippingCost;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backBtn, { backgroundColor: colors.card }]}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Cart</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {cart.length === 0 ? (
          <View style={styles.empty}>
            <Text style={[styles.emptyText, { color: colors.muted }]}>
              Your cart is empty.
            </Text>
          </View>
        ) : (
          cart.map((item: any) => (
            <View key={item.id.toString()} style={[styles.card, { backgroundColor: colors.card }]}>
              <View style={[styles.imageWrapper, { backgroundColor: colors.background }]}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>

              <View style={styles.info}>
                <Text numberOfLines={2} style={[styles.name, { color: colors.text }]}>
                  {item.name || "Men's Tie-Dye T-Shirt"}
                </Text>
                <Text style={styles.brand}>Nike Sportswear</Text>
                <Text style={styles.taxText}>${item.price} (-$4.00 Tax)</Text>

                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    style={[styles.qtyBtn, { backgroundColor: colors.background }]}
                    onPress={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Image
                      source={require('../assets/ArrowDown.png')}
                      style={styles.arrowIcon}
                    />
                  </TouchableOpacity>

                  <Text style={[styles.qty, { color: colors.text }]}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={[styles.qtyBtn, { backgroundColor: colors.background }]}
                    onPress={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Image
                      source={require('../assets/ArrowUp.png')}
                      style={styles.arrowIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.deleteBtn, { backgroundColor: colors.card }]}
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Image
                  source={require('../assets/Trash.png')}
                  style={[styles.trashIcon, { tintColor: colors.text }]}
                />
              </TouchableOpacity>
            </View>
          ))
        )}

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Delivery Address</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Address')}>
            <Image
              source={require('../assets/Arrow.png')}
              style={[styles.sectionArrow, { tintColor: colors.text }]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.addressCard}>
          <Image
            source={require('../assets/map.png')}
            style={styles.addressIcon}
          />
          <View style={styles.addressTextContainer}>
            <Text style={[styles.addressTitle, { color: colors.text }]}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={styles.addressSubtitle}>Sylhet</Text>
          </View>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Payment Method</Text>
          <TouchableOpacity onPress={() => navigation.navigate('payment')}>
            <Image
              source={require('../assets/Arrow.png')}
              style={[styles.sectionArrow, { tintColor: colors.text }]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.paymentCard}>
          <View style={[styles.cardLogoWrapper, { backgroundColor: colors.card }]}>
            <Text style={styles.visaText}>VISA</Text>
          </View>
          <View style={styles.paymentTextContainer}>
            <Text style={[styles.paymentTitle, { color: colors.text }]}>Visa Classic</Text>
            <Text style={styles.paymentSubtitle}>**** 7690</Text>
          </View>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        <Text
          style={[styles.sectionTitle, { marginTop: 15, marginBottom: 12, color: colors.text }]}
        >
          Order Info
        </Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={[styles.summaryValue, { color: colors.text }]}>${subtotal.toFixed(0)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping cost</Text>
          <Text style={[styles.summaryValue, { color: colors.text }]}>${shippingCost}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={[styles.summaryValue, { color: colors.text }]}>${total.toFixed(0)}</Text>
        </View>
      </ScrollView>

      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('orderdone')}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 15,
  },

  backBtn: {
    width: 45,
    height: 45,
    //justify: 'center',
    alignItems: 'center',
    borderRadius: 22.5,
    marginTop: 15,
  },

  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  placeholder: {
    width: 45,
    height: 45,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  empty: {
    alignItems: 'center',
    marginVertical: 40,
  },

  emptyText: {
    fontSize: 16,
    color: '#8F959E',
  },

  card: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },

  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },

  brand: {
    fontSize: 11,
    color: '#8F959E',
    marginTop: 2,
  },

  taxText: {
    fontSize: 11,
    color: '#8F959E',
    marginTop: 2,
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  qtyBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E7E8EA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },

  qty: {
    marginHorizontal: 12,
    fontWeight: '600',
    fontSize: 13,
  },

  deleteBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  trashIcon: {
    width: 16,
    height: 16,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
  },

  sectionArrow: {
    width: 16,
    height: 16,
  },

  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  addressIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },

  addressTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  addressTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  addressSubtitle: {
    fontSize: 12,
    color: '#8F959E',
    marginTop: 2,
  },

  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  cardLogoWrapper: {
    width: 48,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  visaText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1434CB',
    fontStyle: 'italic',
  },

  paymentTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  paymentTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  paymentSubtitle: {
    fontSize: 12,
    color: '#8F959E',
    marginTop: 2,
  },

  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#4ACD83',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkMark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  summaryLabel: {
    color: '#8F959E',
    fontSize: 15,
  },

  summaryValue: {
    fontSize: 15,
    fontWeight: '700',
  },

  checkoutContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
  },

  checkoutBtn: {
    backgroundColor: '#9775FA',
    borderRadius: 12,
    paddingVertical: 16,

    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
