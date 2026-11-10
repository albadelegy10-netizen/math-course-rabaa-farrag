import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { EST1_2026_JAN_SET } from "./questions_est1_2026_jan.ts";

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
  console.log("Uploading " + EST1_2026_JAN_SET.length + " questions...");
  try {
    await setDoc(doc(db, "lessons", "est1_2026_jan"), {
      questions: EST1_2026_JAN_SET
    }, { merge: true });
    console.log("Upload successful!");
  } catch (e) {
    console.error("Upload failed:", e);
  }
  process.exit(0);
}

upload();
