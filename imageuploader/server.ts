/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwyrEnBM4jXHNppCqKRmKZE-eUGVM2CM",
  authDomain: "proj62130500030-580d9.firebaseapp.com",
  databaseURL: "https://proj62130500030-580d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "proj62130500030-580d9",
  storageBucket: "proj62130500030-580d9.appspot.com",
  messagingSenderId: "494135864158",
  appId: "1:494135864158:web:6e614f6130f49467dc7dcf",
  measurementId: "G-382ME7V80S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Ignitor(__dirname)
  .httpServer()
  .start()
