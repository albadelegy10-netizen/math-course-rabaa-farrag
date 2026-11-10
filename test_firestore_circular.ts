import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const app = initializeApp({ projectId: 'demo-project' });
const db = getFirestore(app);

const obj: any = {};
obj.a = obj;

async function test() {
  try {
    await setDoc(doc(db, 'test/1'), obj);
  } catch (e: any) {
    console.log("Error:", e.message);
  }
}

test();
