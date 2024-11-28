import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
export async function getCity() {
  const docRef = doc(db, "cities", "LA");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}
