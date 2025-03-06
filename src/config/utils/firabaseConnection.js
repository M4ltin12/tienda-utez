import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAeXdloiyBnaoV7vCxys8fBaQB8a4FHhYQ",
    authDomain: "tiendautez-b8f80.firebaseapp.com",
    projectId: "tiendautez-b8f80",
    storageBucket: "tiendautez-b8f80.firebasestorage.app",
    messagingSenderId: "962313488018",
    appId: "1:962313488018:web:98882ada33a2a0ea70c84b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  const db = getFirestore(app);
  const storage = getStorage(app);
  export { app, auth, db, storage };