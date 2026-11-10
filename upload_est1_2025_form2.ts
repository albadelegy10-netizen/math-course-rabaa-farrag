import { EST1_2025_FORM2_SET } from "./src/data/questions_est1_2025_form2.ts";
import { EST1_2025_FORM2_PART2_SET } from "./src/data/questions_est1_2025_form2_part2.ts";
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
  const allQuestions = [...EST1_2025_FORM2_SET, ...EST1_2025_FORM2_PART2_SET];
  console.log("Uploading " + allQuestions.length + " questions...");
  try {
    await setDoc(doc(db, "lessons", "est1_2025_form2"), {
      questions: allQuestions
    }, { merge: true });
    console.log("Upload complete!");
    process.exit(0);
  } catch (e) {
    console.error("Error uploading:", e);
    process.exit(1);
  }
}

upload();
