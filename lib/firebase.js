import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '0',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '0'
};

export function getDb() {
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  return getFirestore(app);
}

export async function getCollectionOrLocal(name) {
  try {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === 'demo') {
      throw new Error('Using local data');
    }
    const db = getDb();
    const snap = await getDocs(collection(db, name));
    const out = [];
    snap.forEach(doc => out.push({ id: doc.id, ...doc.data() }));
    if (out.length) return out;
    throw new Error('Empty');
  } catch (e) {
    // Fallback to local JSON
    const res = await import(`../data/${name}.json`);
    return res.default;
  }
}
