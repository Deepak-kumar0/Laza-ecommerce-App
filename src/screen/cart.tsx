import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartContext } from '../context/cart-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/slices/cart-slice';

export default function Cart({ navigation }: any) {
  const cart=useSelector((state:RootState)=>state?.cart?.cart)
  const dispatch=useDispatch()

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  const itemCount = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Back.png')} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Cart</Text>

        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.brand}>Nike Sportswear</Text>

              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => dispatch(decreaseQuantity(item.id))}
                >
                  <Text style={styles.qtyTxt}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() =>dispatch( increaseQuantity(item.id))}
                >
                  <Text style={styles.qtyTxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => dispatch(removeFromCart(item.id))}
            >
              <Text style={styles.deleteText}>delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items</Text>
            <Text style={styles.summaryValue}>{itemCount}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1E20',
  },

  placeholder: {
    width: 40,
    height: 40,
  },

  listContent: {
    paddingBottom: 20,
  },

  empty: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyText: {
    fontSize: 18,
    color: '#777',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F5F6FA',
    borderRadius: 18,
    padding: 15,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1D1E20',
  },

  brand: {
    marginTop: 3,
    color: '#8F959E',
  },

  price: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyTxt: {
    fontSize: 18,
    fontWeight: '700',
  },

  qty: {
    marginHorizontal: 15,
    fontWeight: '700',
    fontSize: 16,
  },

  deleteBtn: {
    padding: 5,
    justifyContent: 'center',
  },

  deleteText: {
    color: 'red',
    fontSize: 18,
  },

  summary: {
    backgroundColor: '#F5F6FA',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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

  checkoutBtn: {
    marginTop: 8,
    backgroundColor: '#9775FA',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
