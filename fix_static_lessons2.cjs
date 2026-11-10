const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const ts = require('typescript'); // We can just use string manipulation safely if we are careful

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
  const snap = await getDocs(collection(db, 'lessons'));
  let deletedIds = new Set();
  snap.forEach(d => {
    const data = d.data();
    if (data.deleted) deletedIds.add(d.id);
  });
  console.log(`Found ${deletedIds.size} deleted lessons in DB.`);

  let content = fs.readFileSync('constants.tsx', 'utf8');
  let newContent = content;

  // Since LESSONS is an array of objects, and each object starts with `{` and has an `id: ...`,
  // we can use a regex to match each object in the LESSONS array.
  
  // A simpler way: we'll run a TS script that imports LESSONS, filters it, and writes it back?
  // No, we lose formatting and functions.
  
  // Let's just fix App.tsx initial state!
  
  process.exit(0);
}
check();
