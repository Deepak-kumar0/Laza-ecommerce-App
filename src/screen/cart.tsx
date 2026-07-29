import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
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

export default function Cart({ navigation }: any) {
  const cart = useSelector((state: RootState) => state?.cart?.cart) || [];
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = cart.length > 0 ? 10 : 0;
  const total = subtotal + shippingCost;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {cart.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
          </View>
        ) : (
          cart.map((item: any) => (
            <View key={item.id.toString()} style={styles.card}>
              <View style={styles.imageWrapper}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>

              <View style={styles.info}>
                <Text numberOfLines={2} style={styles.name}>
                  {item.name || "Men's Tie-Dye T-Shirt"}
                </Text>
                <Text style={styles.brand}>Nike Sportswear</Text>
                <Text style={styles.taxText}>${item.price} (-$4.00 Tax)</Text>

                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Image
                      source={require('../assets/ArrowDown.png')}
                      style={styles.arrowIcon}
                    />
                  </TouchableOpacity>

                  <Text style={styles.qty}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyBtn}
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
                style={styles.deleteBtn}
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Image
                  source={require('../assets/Trash.png')}
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
          ))
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Address')}>
            <Image
              source={require('../assets/Arrow.png')}
              style={styles.sectionArrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.addressCard}>
          <Image
            source={require('../assets/map.png')}
            style={styles.addressIcon}
          />
          <View style={styles.addressTextContainer}>
            <Text style={styles.addressTitle}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={styles.addressSubtitle}>Sylhet</Text>
          </View>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity onPress={() => navigation.navigate('payment')}>
            <Image
              source={require('../assets/Arrow.png')}
              style={styles.sectionArrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.paymentCard}>
          <View style={styles.cardLogoWrapper}>
            <Text style={styles.visaText}>VISA</Text>
          </View>
          <View style={styles.paymentTextContainer}>
            <Text style={styles.paymentTitle}>Visa Classic</Text>
            <Text style={styles.paymentSubtitle}>**** 7690</Text>
          </View>
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        <Text
          style={[styles.sectionTitle, { marginTop: 15, marginBottom: 12 }]}
        >
          Order Info
        </Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(0)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping cost</Text>
          <Text style={styles.summaryValue}>${shippingCost}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>${total.toFixed(0)}</Text>
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
    backgroundColor: '#fff',
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
    backgroundColor: '#F5F6FA',
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
    color: '#1D1E20',
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
    backgroundColor: '#F5F6FA',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },

  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#fff',
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
    color: '#1D1E20',
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
    backgroundColor: '#fff',
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
    color: '#1D1E20',
  },

  deleteBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  trashIcon: {
    width: 16,
    height: 16,
    tintColor: '#8F959E',
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
    color: '#1D1E20',
  },

  sectionArrow: {
    width: 16,
    height: 16,
    tintColor: '#1D1E20',
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
    color: '#1D1E20',
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
    backgroundColor: '#F5F6FA',
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
    color: '#1D1E20',
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
    color: '#1D1E20',
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
