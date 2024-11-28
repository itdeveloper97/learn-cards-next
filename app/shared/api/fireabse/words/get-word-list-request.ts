import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { query } from "@firebase/firestore";
import { Word } from "@/app/shared/api/fireabse/words/types";

export type GetWordListRequest = Word[];

export const getWordListRequest =
  async (): Promise<GetWordListRequest | null> => {
    if (!auth.currentUser) {
      return null;
    }

    const c = collection(db, "words");
    const q = query(c);
    const qs = await getDocs(q);

    qs.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });

    return qs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GetWordListRequest;
  };
//
// export async function getCities() {
//   const c = collection(db, "cities", "SF", "landmarks");
//   const q = query(c, where("capital", "==", true));
//   const querySnapshot = await getDocs(c);
//   console.log("querySnapshot: ", querySnapshot.docs);
//
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// }
