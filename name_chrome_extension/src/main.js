import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/firestore'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // Your web app's Firebase configuration
  created() {var firebaseConfig = {
    apiKey: "AIzaSyBQWZ6OaGPQ6J5OSOl3R4M_7s2qzXNz7ik",
    authDomain: "namechromeextension.firebaseapp.com",
    projectId: "namechromeextension",
    storageBucket: "namechromeextension.appspot.com",
    messagingSenderId: "496204409850",
    appId: "1:496204409850:web:c975bf398999dc0c48d243"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

}
  

}).$mount('#app')
const db = firebase.firestore()

//collection refrences
const names = db.collection('names')

export default{
  db,
  names
}