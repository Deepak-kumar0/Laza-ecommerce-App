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

export default function Home({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.icon} source={require('../assets/Menu.png')} />
        <Image style={styles.icon} source={require('../assets/Cart.png')} />
      </View>

      <Text style={styles.header}>Hello</Text>
      <Text style={styles.hd}>Welcome to Laza</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 5,
          height: 50,
          marginTop: 17,
        }}
      >
        <TouchableOpacity style={styles.searchrow}>
          <Image
            style={{
              height: 25,
              width: 25,
              marginTop: 10,
              marginLeft: 10,
              alignSelf: 'center',
              flexDirection: 'row',
            }}
            source={require('../assets/Search.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: '#8F959E',
              padding: 8,
              marginTop: 10,
              marginLeft: 5,
            }}
          >
            Search...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('product')}>
          <Image style={styles.voice} source={require('../assets/Voice.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.as}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Choose Brand</Text>
        <TouchableOpacity>
          <Text style={{ color: '#8F959E', fontSize: 15 }}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ marginBlock: 10, height: 60 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {brand.map(item => (
          <View key={item.id} style={styles.brandCard}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <Text style={{ textAlign: 'center', marginLeft: 10 }}>
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
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingHorizontal: 13,
  },
  brandCard: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#F5F6FA',
    // //padding: 10,
    // height: 50,
    // borderRadius: 12,
    // marginRight: 10,

    flexDirection: 'row',
    backgroundColor: '#dbdbdb88',
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
    backgroundColor: '#F5F6FA',
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
    backgroundColor: '#fff',
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
