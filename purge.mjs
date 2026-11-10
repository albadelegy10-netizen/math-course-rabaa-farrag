import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr66WXbC_5Azp5x5DBmh6un_nMIZuiTwM",
  authDomain: "math-test3.firebaseapp.com",
  projectId: "math-test3",
  storageBucket: "math-test3.firebasestorage.app",
  messagingSenderId: "1098461657719",
  appId: "1:1098461657719:web:4d1041cd6a63c58c4ca472"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function purgeCache() {
  const ids = ['est1_2026_march', 'est1_2021_march', 'est1_2021_jan'];
  for (const id of ids) {
     await deleteDoc(doc(db, "lessons", id));
     console.log(`Deleted ${id} from Firestore so it falls back to raw code.`);
  }
}

purgeCache().then(() => process.exit(0)).catch(console.error);
