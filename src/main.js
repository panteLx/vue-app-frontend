import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1MsaDp_NRFrD5SbCGDi4YLHHc1gpsovI",
  authDomain: "vue-firebase-1eee2.firebaseapp.com",
  projectId: "vue-firebase-1eee2",
  storageBucket: "vue-firebase-1eee2.appspot.com",
  messagingSenderId: "419292623889",
  appId: "1:419292623889:web:d36e305c48008ce5fc6db0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
