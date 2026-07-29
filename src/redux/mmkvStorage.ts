import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';

let storage: MMKV | null = null;
let mmkvAvailable = true;

function getStorage() {
  if (storage) {
    return storage;
  }
  try {
    storage = new MMKV();
  } catch {
    // MMKV requires JSI (synchronous native calls). During Metro dev/hot-reload,
    // JSI may not be available, so fall back to AsyncStorage.
    mmkvAvailable = false;
  }
  return storage;
}

export const mmkvStorage = {
  setItem: async (key: string, value: string) => {
    getStorage();
    if (mmkvAvailable && storage) {
      storage.set(key, value);
    } else {
      await AsyncStorage.setItem(key, value);
    }
    return value;
  },

  getItem: async (key: string) => {
    getStorage();
    if (mmkvAvailable && storage) {
      return storage.getString(key) ?? null;
    }
    return AsyncStorage.getItem(key);
  },

  removeItem: async (key: string) => {
    getStorage();
    if (mmkvAvailable && storage) {
      storage.delete(key);
    } else {
      await AsyncStorage.removeItem(key);
    }
  },
};

