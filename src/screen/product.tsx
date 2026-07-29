import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Product({ navigation }: { navigation: any }) {
  const images = [
    'https://picsum.photos/id/1011/500/500',
    'https://picsum.photos/id/1018/500/500',
    'https://picsum.photos/id/1025/500/500',
    'https://picsum.photos/id/1035/500/500',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const route = useRoute();

  const item = route?.params?.item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.imageContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.iconCircle}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.backIcon}
                source={require('../assets/Back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <Image
                style={styles.backIcon}
                source={require('../assets/Cart.png')}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: item?.image }}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.category}>Men's category</Text>
              <Text style={styles.title}>{item?.name}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>${item?.price}</Text>
            </View>
          </View>

          <FlatList
            horizontal
            data={images}
            keyExtractor={i => i}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedImage(item)}>
                <Image
                  source={{ uri: item }}
                  style={[
                    styles.thumb,
                    selectedImage === item && styles.selectedThumb,
                  ]}
                />
              </TouchableOpacity>
            )}
          />

          <View style={[styles.row, { marginTop: 8 }]}>
            <Text style={styles.sectionTitle}>Size</Text>
            <TouchableOpacity>
              <Text style={styles.guide}>Size Guide</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sizeRow}>
            {sizes.map(s => (
              <TouchableOpacity
                key={s}
                onPress={() => setSelectedSize(s)}
                style={[
                  styles.sizeBtn,
                  selectedSize === s && styles.sizeActive,
                ]}
              >
                <Text
                  style={[
                    styles.sizeTxt,
                    selectedSize === s && { color: '#8F959E' },
                  ]}
                >
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.desc}>
            The Nike Throwback Pullover Hoodie is made from premium French terry
            fabric that blends a performance feel with{' '}
            <Text style={styles.readMore}>Read More..</Text>
          </Text>

          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('reviews', {
                  reviews: item.reviews,
                })
              }
            >
              <Text style={styles.guide}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image
                source={{ uri: 'https://picsum.photos/id/64/80/80' }}
                style={styles.avatar}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.reviewerName}>Ronald Richards</Text>
                <Text style={styles.reviewDate}>🕒 13 Sep, 2020</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.ratingText}>
                  <Text style={{ fontWeight: 'bold', color: '#1D1E20' }}>
                    4.8
                  </Text>{' '}
                  <Text style={{ color: '#8F959E', fontSize: 11 }}>rating</Text>
                </Text>
                <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
              </View>
            </View>
            <Text style={styles.reviewBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque malesuada eget vitae amet...
            </Text>
          </View>

          <View style={styles.priceRow}>
            <View>
              <Text style={styles.totalPriceTitle}>Total Price</Text>
              <Text style={styles.vatSubtext}>with VAT,SD</Text>
            </View>
            <Text style={styles.totalPriceAmount}>$125</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bottomBarButton} activeOpacity={0.8}>
        <Text style={styles.bottomBarButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    backgroundColor: '#F5F6FA',
    width: '100%',
    height: 380,
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
    elevation: 1000, // Android
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  mainImage: {
    marginTop: 15,
    width: '100%',
    height: '100%',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
  },
  category: {
    fontSize: 13,
    color: '#8F959E',
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1E20',
  },
  priceLabel: {
    fontSize: 13,
    color: '#8F959E',
    textAlign: 'right',
    marginBottom: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1E20',
  },
  thumbList: {
    paddingVertical: 16,
  },
  thumb: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#F5F6FA',
  },
  selectedThumb: {
    borderWidth: 2,
    borderColor: '#9775FA',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1D1E20',
    marginTop: 16,
  },
  guide: {
    color: '#8F959E',
    fontSize: 15,
    marginTop: 16,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  sizeBtn: {
    width: (width - 40 - 40) / 5,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeActive: {
    backgroundColor: '#F5F6FA',
    borderWidth: 1,
    borderColor: '#1D1E20',
  },
  sizeTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1E20',
  },
  desc: {
    color: '#8F959E',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  readMore: {
    color: '#1D1E20',
    fontWeight: '700',
  },
  reviewCard: {
    marginTop: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewerName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#1D1E20',
  },
  reviewDate: {
    color: '#8F959E',
    fontSize: 11,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 13,
  },
  stars: {
    fontSize: 10,
    marginTop: 2,
  },
  reviewBody: {
    color: '#8F959E',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  totalPriceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1D1E20',
  },
  vatSubtext: {
    fontSize: 11,
    color: '#8F959E',
    marginTop: 2,
  },
  totalPriceAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1D1E20',
  },
  bottomBarButton: {
    backgroundColor: '#9775FA',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottomBarButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
