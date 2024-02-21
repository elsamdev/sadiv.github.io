import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { Config } from "../../config";

const app = initializeApp(Config.fb)
export const db = getFirestore(app);
export const stg = getStorage(app);