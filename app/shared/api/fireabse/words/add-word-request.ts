import { auth, db } from "@/config/firebase";
import { Word } from "./types";
import { addDoc, collection } from "@firebase/firestore";

export const addWordRequest = async (params: Pick<Word, "ru" | "en">) => {
  if (!auth.currentUser?.uid) {
    return null;
  }

  const _collection = collection(db, "words");
  return addDoc(_collection, {
    uid: auth.currentUser.uid,
    ...params,
  });
};
