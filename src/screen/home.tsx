import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import products from '../../data.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import brand from '../../brand.json';
import { useTheme } from '../context/ThemeContext';
import { RootState } from '../redux/store';
import { addToCart, removeFromCart } from '../redux/slices/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../redux/slices/wishlist-slice';
export default function Home({ navigation }: { navigation: any }) {

  const dispatch = useDispatch();
  const { colors } = useTheme();

  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const cart = useSelector((state: RootState) => state?.cart?.cart);

  return (
    <SafeAreaView style={[styles.container,{ backgroundColor: colors.background }]}>
      <View style={styles.img}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icon} source={require('../assets/Menu.png')} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('wishlist')}>
            <Text style={{ fontSize: 28, color: '#9775FA', marginTop: 8 }}>
              ♡
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <Image style={styles.icon} source={require('../assets/Cart.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.header, { color: colors.text }]}>Hello</Text>
      <Text style={[styles.hd, { color: colors.muted }]}>Welcome to Laza</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 5,
          height: 50,
          marginTop: 17,
        }}
      >
        <TouchableOpacity style={[styles.searchrow, { backgroundColor: colors.input }]}>
          <Image
            style={{
              height: 25,
              width: 25,
              marginTop: 10,
              marginLeft: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              tintColor: colors.muted,
            }}
            source={require('../assets/Search.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: colors.muted,
              padding: 8,
              marginTop: 10,
              marginLeft: 5,
            }}
          >
            Search...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('camera')}>
          <Image style={styles.voice} source={require('../assets/Voice.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.as}>
        <Text style={{ fontSize: 20, fontWeight: '500', color: colors.text }}>
          Choose Brand
        </Text>
        <TouchableOpacity>
          <Text style={{ color: colors.muted, fontSize: 15 }}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ marginBlock: 10, height: 60 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {brand.map(item => (
          <View
            key={item.id}
            style={[styles.brandCard, { backgroundColor: colors.card }]}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <Text style={{ textAlign: 'center', marginLeft: 10, color: colors.text }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={8}
        windowSize={5}
        removeClippedSubviews
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const isAdded = cart.some(
            (p: any) => String(p.id) === String(item.id),
          );
          const isWishlisted = wishlist.some(
            (p: any) => String(p.id) === String(item.id),
          );
          return (
            <TouchableOpacity
              onPress={() => navigation.push('product', { item })}
              style={[styles.card, { backgroundColor: colors.card }]}
              activeOpacity={0.8}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>

              <Text style={[styles.price, { color: colors.text }]}>${item.price}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (isWishlisted) {
                    dispatch(removeFromWishlist(item.id));
                  } else {
                    dispatch(addToWishlist(item));
                  }
                }}
                style={styles.wishlistBtn}
              >
                <Text style={styles.wishlistText}>
                  {isWishlisted ? '♥' : '♡'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.cartBtn,
                  isAdded && { backgroundColor: '#ff4d4d' },
                ]}
                onPress={() => {
                  if (isAdded) {
                    dispatch(removeFromCart(item?.id));
                  } else {
                    dispatch(addToCart(item));
                  }
                }}
              >
                <Text style={styles.cartText}>
                  {isAdded ? 'Remove' : 'Add to Cart'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 13,
  },
  cartBtn: {
    marginTop: 10,
    backgroundColor: '#9775FA',
    padding: 10,
    borderRadius: 8,
  },

  cartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  brandCard: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  searchrow: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  voice: {
    width: 50,
    height: 50,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    //marginTop: 35,
  },
  as: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  wishlistBtn: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  wishlistText: {
    fontSize: 22,
    color: '#9775FA',
  },

  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 10,
    //paddingHorizontal: 10,
  },
  hd: {
    fontSize: 16,
    color: '#8F959E',
    // paddingHorizontal: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    margin: '1%',
    borderRadius: 15,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
