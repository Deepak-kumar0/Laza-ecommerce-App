import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Wishlist({ navigation }: any) {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backIcon} source={require('../assets/Back.png')}/>
        </TouchableOpacity>

        <Text style={styles.title}>Wishlist</Text>

        <View style={{ width: 30 }} />
      </View>

      <FlatList
        data={wishlist}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Your wishlist is empty.</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.push('product', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
   // marginBottom: 20,
  },
  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1E20',
  },
  empty: {
    marginTop: 80,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  price: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '600',
    color: '#9775FA',
  },
});