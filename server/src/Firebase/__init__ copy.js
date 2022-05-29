import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'value',
  authDomain: 'value',
  projectId: 'value',
  storageBucket: 'value',
  messagingSenderId: 'value',
  appId: 'value',
}

export const firebase = initializeApp(firebaseConfig)

export const db = getFirestore(firebase)
