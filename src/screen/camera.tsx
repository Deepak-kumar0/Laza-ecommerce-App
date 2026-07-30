import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';

import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { useTheme } from '../context/ThemeContext';

export default function Camera() {
  const [image, setImage] = useState('');
  const { colors } = useTheme();

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
      } else {
        Alert.alert('Permission Denied');
      }
    } else {
      openCamera();
    }
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      
      response => {
        if (response.assets) {
          setImage(response.assets[0].uri || '');
        }
      },
    );
  };
  const openVideoCamera = () => {
  launchCamera(
    {
      mediaType: 'video',
      saveToPhotos: true,
      videoQuality: 'high',
      durationLimit: 30,
    },
    response => {
      if (response.assets) {
        setImage(response.assets[0].uri || '');
      }
    },
  );
};

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'mixed',
      },
      response => {
        if (response.assets) {
          setImage(response.assets[0].uri || '');
        }
      },
    );
  };

  const deleteImage = () => {
    Alert.alert(
      'Delete Image',
      'Are you sure?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setImage(''),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <View style={styles.header}>
        <TouchableOpacity style={[styles.circle, { backgroundColor: colors.card }]}>
          <Text style={[styles.icon, { color: colors.text }]}>←</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: colors.text }]}>Image Picker</Text>

        <TouchableOpacity
          style={[styles.circle, { backgroundColor: colors.card }]}
          onPress={deleteImage}>
          <Text style={styles.icon}>🗑</Text>
        </TouchableOpacity>
      </View>


      <View style={[styles.imageCard, { backgroundColor: colors.card }]}>
        {image ? (
          <Image
            source={{uri: image}}
            style={styles.image}
          />
        ) : (
          <View style={styles.placeholder}>
            <Text style={[styles.placeholderText, { color: colors.muted }]}>
              No Image Selected
            </Text>
          </View>
        )}
      </View>


      <TouchableOpacity
        style={styles.cameraBtn}
        onPress={askPermission}>
        <Text style={styles.btnText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.galleryBtn}
        onPress={openGallery}>
        <Text style={styles.btnText}>Open Gallery</Text>
      </TouchableOpacity>

      {image !== '' && (
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={deleteImage}>
          <Text style={styles.btnText}>Delete Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  circle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  icon: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  imageCard: {
    height: 380,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 8,
    marginBottom: 30,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    fontSize: 20,
    color: '#999',
  },

  cameraBtn: {
    backgroundColor: '#7B61FF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 15,
  },

  galleryBtn: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 15,
    marginBottom: 15,
  },

  deleteBtn: {
    backgroundColor: '#F44336',
    padding: 16,
    borderRadius: 15,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});