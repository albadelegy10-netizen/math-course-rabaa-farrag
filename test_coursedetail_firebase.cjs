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

async function run() {
  const snap = await getDocs(collection(db, 'lessons'));
  let dbLessons = [];
  snap.forEach(d => {
    const data = d.data();
    data.id = d.id;
    if (!data.deleted) dbLessons.push(data);
  });
  
  // mock constants filtering
  const deletedIds = ["dsat_custom_1776268459582","dsat_custom_1782818565522","dsat_custom_1782818566189","est1_2022_june_exam","est1_2022_march_exam","est1_2025_custom","est1_2025_form3","est1_2025_form5","est1_2025_form6","est1_2026_jan","est1_2026_may","est1_custom_1782814097985","est1_custom_1782814099360","est1_custom_1782814099848","est1_custom_1782814100060","est1_custom_1782814100270","est1_ex1","est1_ex2","est1_ex3","est1_linear_equation_part1","est1_new_exam","est1_percentage","est1_statistics_part1","est2_custom_1784471462112","geometry_custom_1771470921166","geometry_custom_1772859262897","geometry_custom_1776987139850","sat_2025_dec","sat_2025_dec_form_c","sat_2025_march_form_b","sat_2025_nov1","sat_circle_mastery","sat_ex1","sat_ex10","sat_ex3","sat_ex4","sat_ex5","sat_ex6","sat_ex7","sat_ex8","sat_ex9","sat_pythagoras_sin_law","solving_equation_28"];
  const DELETED = new Set(deletedIds);
  
  // We can't import LESSONS easily in cjs without transpile, let's just grep the IDs to see if est1_2026_march is in DB
  const est1_2026_march = dbLessons.find(l => l.id === 'est1_2026_march');
  console.log("Firebase est1_2026_march:", est1_2026_march ? est1_2026_march.title : "Not found in DB");
  
  let count = 0;
  dbLessons.forEach(l => {
    if ((l.course || '').toUpperCase() === 'EST1' || (l.id.startsWith('est1_') && !l.course)) {
      if (l.type === 'exam' || ((l.title || '').toLowerCase().includes('exam') || l.id.includes('ex'))) {
        count++;
        // console.log(l.title, l.id);
      }
    }
  });
  console.log("Total DB EST1 exams:", count);
  process.exit(0);
}
run();
