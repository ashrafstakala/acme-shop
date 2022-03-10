import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// Query data from Firestore
firestore
  .collection('users')
  .doc('AmxrJr9w5jt9ALIZQyi1')
  .collection('cartItems')
  .doc('zs8IcXKVr2sHcJfpDbrS');

firestore.doc('/users/AmxrJr9w5jt9ALIZQyi1/cartItems/zs8IcXKVr2sHcJfpDbrS');
firestore.collection('/users/AmxrJr9w5jt9ALIZQyi1/cartItems');
