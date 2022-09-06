import { initializeApp } from 'firebase/app'
import secrets from './secrets';
import { getAuth } from "firebase/auth";

let app = initializeApp(secrets);

export let auth = getAuth(app);