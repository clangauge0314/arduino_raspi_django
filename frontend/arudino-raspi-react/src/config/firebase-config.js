import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyB_4RrFLE22YNOTg6AaELazMmX5E8-LPYY',
  authDomain: 'arduino-raspi-authentication.firebaseapp.com',
  projectId: 'arduino-raspi-authentication',
  storageBucket: 'arduino-raspi-authentication.appspot.com',
  messagingSenderId: '3996977439',
  appId: '1:3996977439:web:804acc940db80e272a882a',
  measurementId: 'G-41ZVQ7HWC7',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

console.log(app);