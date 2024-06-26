import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import key from "../keys/key.mjs";

const app = initializeApp({ credential: cert(key) });
const db = getFirestore(app, "database");

/**
 * @param {string} col
 * @param {string} doc
 * @returns
 */
export const getDoc = function (col, doc) {
  return db.collection(col).doc(doc).get();
};
/**
 * @param {string} col
 * @returns
 */
export const getDocs = function (col) {
  return db.collection(col).get();
};

/**
 * @param {string} col
 * @param {object} data
 * @returns
 */
export const addDoc = function (col, data) {
  const d = JSON.parse(JSON.stringify(data));
  return db.collection(col).add(d);
};

/**
 * @param {string} col
 * @param {string} doc
 * @param {object} data
 * @returns
 */
export const updateDoc = function (col, doc, data) {
  const d = JSON.parse(JSON.stringify(data));
  return db.collection(col).doc(doc).update(d);
};

/**
 * @param {string} col
 * @param {string} doc
 * @param {object} data
 * @returns
 */
export const setDoc = function (col, doc, data) {
  const d = JSON.parse(JSON.stringify(data));
  return db.collection(col).doc(doc).set(d);
};

/**
 * @param {string} col
 * @param {string} doc
 * @param {(snapshot: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>) => void} onSnapshot
 * @param {(error: Error) => void} onError
 * @returns {Function}
 */
export const docListener = function (col, doc, onSnapshot, onError) {
  return db.collection(col).doc(doc).onSnapshot(onSnapshot, onError);
};

/**
 * @param {string} col
 * @param {(snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>) => void} onSnapshot
 * @param {(error: Error) => void} onError
 * @returns {Function}
 */
export const colListener = function (col, onSnapshot, onError) {
  return db.collection(col).onSnapshot(onSnapshot, onError);
};
