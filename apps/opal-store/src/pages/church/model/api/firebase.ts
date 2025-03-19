import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, collection, addDoc } from "@/shared/firebase";
import { UserInfo } from "@/pages/signUp/interface";

type Params = {
  logo: string;
  name: string;
  space: string;
};

const collectionName = "church";

const collectionDB = collection(db, collectionName);

export async function createChurch(params: Params) {
  const { logo, name, space } = params;
  return await addDoc(collectionDB, { logo, name, space });
}

export async function deleteChurch(id: string) {
  const churchRef = doc(db, collectionName, id);
  return await deleteDoc(churchRef);
}

export const setChurchUserId = async (params: {
  churchId: string;
  userId: string;
  userData: UserInfo;
}) => {
  const { churchId, userId, userData } = params;
  console.log(params);
  return await setDoc(doc(db, `church/${churchId}/users`, userId), userData);
};
