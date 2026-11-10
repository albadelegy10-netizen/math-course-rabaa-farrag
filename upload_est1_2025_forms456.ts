import { EST1_2025_FORM4_SET } from "./src/data/questions_est1_2025_form4.ts";
import { EST1_2025_FORM5_SET } from "./src/data/questions_est1_2025_form5.ts";
import { EST1_2025_FORM6_SET } from "./src/data/questions_est1_2025_form6.ts";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

async function upload() {
  try {
    console.log("Uploading Form 4...");
    await setDoc(doc(db, "lessons", "est1_2025_form4"), {
      questions: EST1_2025_FORM4_SET
    }, { merge: true });
    
    console.log("Uploading Form 5...");
    await setDoc(doc(db, "lessons", "est1_2025_form5"), {
      questions: EST1_2025_FORM5_SET
    }, { merge: true });
    
    console.log("Uploading Form 6...");
    await setDoc(doc(db, "lessons", "est1_2025_form6"), {
      questions: EST1_2025_FORM6_SET
    }, { merge: true });
    
    console.log("Uploads complete!");
    process.exit(0);
  } catch (e) {
    console.error("Error uploading:", e);
    process.exit(1);
  }
}

upload();
