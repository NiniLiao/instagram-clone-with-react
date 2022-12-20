import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

// here i want to import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBbF509QVe16WffzVmoblt3ql5075UxD9Q',
  authDomain: 'instagram-clone-with-rea-252d8.firebaseapp.com',
  projectId: 'instagram-clone-with-rea-252d8',
  storageBucket: 'instagram-clone-with-rea-252d8.appspot.com',
  messagingSenderId: '310802979070',
  appId: '1:310802979070:web:970228bc9e0b335f5aadaf'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export const auth = getAuth(firebase);
export { firebase, FieldValue };
