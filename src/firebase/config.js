import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBgaFlei0nJB4C6FyD3oCnEE_bAx6d0m3s',
  authDomain: 'marija-image-gallery.firebaseapp.com',
  databaseURL: 'https://marija-image-gallery.firebaseio.com',
  projectId: 'marija-image-gallery',
  storageBucket: 'marija-image-gallery.appspot.com',
  messagingSenderId: '343358361916',
  appId: '1:343358361916:web:62338785a97cf0db878e39',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
