import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//! 1) when seeding the database you'll have to uncomment this!
// !2: Seeded on Friday December 18, 2020 10:35AM: Do no uncomment
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.ENV.apiKey,
  authDomain: process.ENV.authDomain,
  databaseURL: process.ENV.databaseURL,
  projectId: process.ENV.projectId,
  storageBucket: process.ENV.storageBucket,
  messagingSenderId: process.ENV.messagingSenderId,
  appId: process.ENV.appId,
  measurementId: process.ENV.measurementId,
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// !2: Seeded on Friday December 18, 2020 10:35AM: Do no uncomment line below
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
