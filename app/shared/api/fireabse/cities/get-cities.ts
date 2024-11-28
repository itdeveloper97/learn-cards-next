import { collection, collectionGroup, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { query, where } from "@firebase/firestore";

export async function getCities() {
  console.log("currentUser: ", auth.currentUser);

  const c = collection(db, "cities", "SF", "landmarks");
  const q = query(c, where("capital", "==", true));
  const querySnapshot = await getDocs(c);
  console.log("querySnapshot: ", querySnapshot.docs);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

export async function getAllMuseums() {
  const cg = collectionGroup(db, "landmarks");
  const q = query(cg, where("type", "==", "museum"));
  const querySnapshot = await getDocs(q);

  console.log("");
}
