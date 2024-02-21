/* eslint-disable no-useless-catch */
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db, stg } from "../Services/FirebaseService";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const NAME = "Posts";

/**
 * @param {string} nam Nombre de la colecion.
 * @return {<Promise>Array} Todos los items.
 */
export async function GetAll(nam) {
  try {
    const a = [];
    const coll = collection(db, nam || NAME);
    const All = await getDocs(coll);
    All.docs.forEach((item) => {
      a.push({ id: item.id, data: item.data() });
    });

    return a;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {string} id - id del item.
 * @param {string} nam Nombre de la colecion.
 */
export async function Get(id, nam) {
  try {
    const item = doc(db, nam || NAME, id);
    const data = await getDoc(item);

    return data.data();
  } catch (error) {
    throw error;
  }
}

/**
 * @param {string} id - id del item.
 * @param {object} data - Datos del item.
 * @param {string} nam Nombre de la colecion.
 */
export async function Add(id, data, nam) {
  try {
    const NewDoc = doc(db, nam || NAME, id);
    await setDoc(NewDoc, data);

    return true;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {File} Img - Imagen del item
 */
export async function UploadImg(Img) {
  try {
    const refer = ref(stg, `ItemsImgs/${v4()}`);
    await uploadBytes(refer, Img);
    const url = await getDownloadURL(refer);
    return url;
  } catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {string} category Categoria del item o los items.
 * @return {<Promise>Array} Todos los items.
 */
export async function GetWithCategory(category) {
  try {
    const a = [];
    const coll = collection(db, NAME);
    const q = query(coll, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((item) =>{
      a.push({ id: item.id, data: item.data() });
    });
  } catch (error) {
    throw error
  }
}