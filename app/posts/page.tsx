import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function Page() {
  // const q = query(collection(db, "posts"), where("capital", "==", true));
  //
  // const querySnapshot = await getDocs(q);
  const docSnap = await getDoc(doc(db, "posts"));

  return <div>Posts</div>;
}
