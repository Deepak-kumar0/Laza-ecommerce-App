import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Reviews({ navigation, route }: any) {
  const reviews = route?.params?.reviews || [
    {
      reviewerName: 'Jenny Wilson',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=12',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
      date: '13 Sep, 2020',
    },
    {
      reviewerName: 'Ronald Richards',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=33',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
      date: '13 Sep, 2020',
    },
    {
      reviewerName: 'Guy Hawkins',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=60',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
      date: '13 Sep, 2020',
    },
    {
      reviewerName: 'Savannah Nguyen',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=47',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
      date: '13 Sep, 2020',
    },
  ];

  const { colors, isDarkMode } = useTheme();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text
          key={i}
          style={i <= fullStars ? styles.starFilled : styles.starEmpty}
        >
          ★
        </Text>,
      );
    }
    return <View style={styles.starRow}>{stars}</View>;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: colors.card }]}
            onPress={() => navigation?.goBack()}
            activeOpacity={0.7}
          >
            <Image
              source={require('../assets/Back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Reviews</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.statsRow}>
          <View>
            <Text style={[styles.totalReviewsCount, { color: colors.text }]}>
              {reviews.length || 0} Reviews
            </Text>
            <View style={styles.ratingBadge}>
              <Text style={[styles.ratingScore, { color: colors.text }]}>4.8</Text>
              {renderStars(5)}
            </View>
          </View>

          <TouchableOpacity
            style={styles.addReviewButton}
            onPress={() => navigation?.navigate('Addreviews')}
            activeOpacity={0.8}
          >
            <Text style={styles.addReviewIcon}>✎</Text>
            <Text style={styles.addReviewText}>Add Review</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={reviews}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <View style={styles.cardHeader}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatarImage}
                />

                <View style={styles.userMeta}>
                  <Text style={[styles.userName, { color: colors.text }]}>
                    {item.reviewerName}
                  </Text>
                  <View style={styles.dateRow}>
                    <Text style={styles.clockIcon}>🕒</Text>
                    <Text style={[styles.dateText, { color: colors.muted }]}>
                      {item.date}
                    </Text>
                  </View>
                </View>

                <View style={styles.cardRatingContainer}>
                  <Text style={[styles.cardRatingText, { color: colors.text }]}>
                    {item.rating}{' '}
                    <Text style={[styles.ratingSubText, { color: colors.muted }]}>
                      rating
                    </Text>
                  </Text>
                  {renderStars(item.rating)}
                </View>
              </View>

              <Text style={[styles.commentText, { color: colors.muted }]}>
                {item.comment}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingVertical: 12,
  },
  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 30,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  headerSpacer: {
    width: 40,
  },

  /* Stats Section */
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  totalReviewsCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingScore: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 6,
  },
  starRow: {
    flexDirection: 'row',
    gap: 2,
  },
  starFilled: {
    color: '#FF8C42',
    fontSize: 11,
  },
  starEmpty: {
    color: '#D1D5DB',
    fontSize: 11,
  },

  /* Add Review Button */
  addReviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7043',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addReviewIcon: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 6,
    fontWeight: 'bold',
  },
  addReviewText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  /* Card Styles */
  cardContainer: {
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E5E7EB',
  },
  userMeta: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: 10,
    marginRight: 4,
    opacity: 0.4,
  },
  dateText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  cardRatingContainer: {
    alignItems: 'flex-end',
  },
  cardRatingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  ratingSubText: {
    fontSize: 11,
    fontWeight: '400',
    color: '#8E8E93',
  },
  commentText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#8E8E93',
  },
});
