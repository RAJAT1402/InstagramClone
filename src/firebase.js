import { initializeApp } from 'firebase/app'
import secrets from './secrets';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

let app = initializeApp(secrets);

export let auth = getAuth(app);
export let db = getFirestore(app);