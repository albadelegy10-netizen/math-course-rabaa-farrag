const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

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

  // We need to parse or string manipulate to remove the objects from LESSONS array.
  // Using a simple regex might be risky. Let's do it by finding `{ id: StaticLessonIds.XXX, ... }`
  // Actually, we can just replace the whole LESSONS array with the merged version!
  // But wait, the user's manual edits and images shouldn't be overwritten.
  
  process.exit(0);
}
check();
