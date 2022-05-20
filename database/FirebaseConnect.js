import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA2emy6q0rg2ceydqTesfnkKuMHIQ6xppg",
  authDomain: "musicapp-8c6fe.firebaseapp.com",
  databaseURL: "https://musicapp-8c6fe-default-rtdb.firebaseio.com",
  projectId: "musicapp-8c6fe",
  storageBucket: "musicapp-8c6fe.appspot.com",
  messagingSenderId: "281866344223",
  appId: "1:281866344223:web:868bf7275eec529408022a",
  measurementId: "G-FGYLT16JLH"
};


let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}
else {
  app = firebase.app()
}
const auth = firebase.auth()
export { auth }