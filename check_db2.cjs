const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc } = require('firebase/firestore');

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

async function check() {
  const docRef = doc(db, 'lessons', 'est1_2026_march');
  const d = await getDoc(docRef);
  if (d.exists()) {
    const data = d.data();
    console.log("Deleted:", data.deleted);
    console.log("Course:", data.course);
    console.log("Type:", data.type);
    console.log("Title:", data.title);
  } else {
    console.log("Not in DB");
  }
  process.exit(0);
}
check();
