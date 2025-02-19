import {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "../../../../shared/firebase";
import { RetreatCreateFormInfo, RetreatReq } from "../../interface/data";

type UpdateRetreatDocParams = {
  id: string;
  dto: RetreatCreateFormInfo;
};

const collectionName = "retreat";

const collectionDB = collection(db, collectionName);

/**
 * 수련회 리스트 조회 firebase api
 * @return RetreatReq[]
 */
export const getRetreatDoc: () => Promise<RetreatReq[]> = async () => {
  const querySnapshot = await getDocs(collectionDB);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as RetreatReq[];
};

/**
 * 수련회 생성 firebase api
 * @prams RetreatConvertReq
 */
export const createRetreatDoc = async (dto: RetreatCreateFormInfo) => {
  return await addDoc(collectionDB, dto);
};

/**
 * 수련회 수정 firebase api
 * @prams RetreatConvertReq
 */
export const updateRetreatDoc = async ({ id, dto }: UpdateRetreatDocParams) => {
  const retreat = doc(db, collectionName, id);
  return await updateDoc(retreat, { ...dto });
};

/**
 * 수련회 삭제 firebase api
 * @prams id
 */
export const deleteRetreatDoc = async (id: string) => {
  const userDoc = doc(db, collectionName, id);
  return await deleteDoc(userDoc);
};
