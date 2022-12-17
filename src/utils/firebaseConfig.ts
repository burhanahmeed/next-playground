// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';

import {
  firebaseApiKey,
  firebaseAppId,
  firebaseProjectId,
  messagingSenderId,
  googleAnalyticId,
} from '@/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  projectId: firebaseProjectId,
  storageBucket: `${firebaseProjectId}.appspot.com`,
  messagingSenderId,
  appId: firebaseAppId,
  measurementId: googleAnalyticId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

let remoteConfigVar;
if (typeof window !== 'undefined') {
  remoteConfigVar = getRemoteConfig(app);
  remoteConfigVar.settings.minimumFetchIntervalMillis = 600000;
}
export const remoteConfig = remoteConfigVar;
