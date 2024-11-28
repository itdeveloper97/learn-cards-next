import { addDoc, collection } from "@firebase/firestore";
import { auth, db } from "@/config/firebase";
import { AddPostRequest } from "@/app/shared/api/fireabse/posts/types";

export const addPost = async ({ title, description, tags }: AddPostRequest) => {
  if (!auth.currentUser?.uid) {
    return;
  }

  addDoc(collection(db, "posts"), {
    title,
    description,
    tags: tags?.split(",").map((tag) => tag.trim()),
    uid: auth.currentUser.uid,
  })
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
