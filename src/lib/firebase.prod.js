import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//! 1) when seeding the database you'll have to uncomment this!
// !2: Seeded on Friday December 18, 2020 10:35AM: Do no uncomment
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// !2: Seeded on Friday December 18, 2020 10:35AM: Do no uncomment line below
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
