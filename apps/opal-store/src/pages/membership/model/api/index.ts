import {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "../../../../shared/firebase";
import { MembershipCreateFormInfo } from "../../interfaces";

type UpdateMembershipDocParams = {
  id: string;
  dto: MembershipCreateFormInfo;
};

const collectionName = "membership";

const collectionDB = collection(db, collectionName);

/**
 * 수련회 리스트 조회 firebase api
 * @return MembershipReq[]
 */
export const getMembershipDoc = async () => {
  const querySnapshot = await getDocs(collectionDB);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/**
 * 수련회 생성 firebase api
 * @prams MembershipConvertReq
 */
export const createMembershipDoc = async (dto: MembershipCreateFormInfo) => {
  return await addDoc(collectionDB, dto);
};

/**
 * 수련회 수정 firebase api
 * @prams MembershipConvertReq
 */
export const updateMembershipDoc = async ({
  id,
  dto,
}: UpdateMembershipDocParams) => {
  const Membership = doc(db, collectionName, id);
  return await updateDoc(Membership, { ...dto });
};

/**
 * 수련회 삭제 firebase api
 * @prams id
 */
export const deleteMembershipDoc = async (id: string) => {
  const userDoc = doc(db, collectionName, id);
  return await deleteDoc(userDoc);
};
