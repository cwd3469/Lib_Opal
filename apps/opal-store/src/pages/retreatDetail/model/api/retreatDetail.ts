import { doc, getDoc } from "firebase/firestore";
import { collection, db } from "../../../../shared/firebase";
import { RetreatReq } from "../../../retreat/interface/data";

const collectionName = "retreat";

const collectionDB = collection(db, collectionName);

/**
 * 수련회 리스트 조회 firebase api
 * @return RetreatReq[]
 */
export const getRetreatDetailDoc = async (retreatId?: string) => {
  if (!retreatId) return;
  const retreatRef = doc(db, collectionName, retreatId);
  const retreatSnap = await getDoc(retreatRef);
  if (!retreatSnap.exists()) throw new Error("존재하지 않은 수련회 입니다.");
  return { id: retreatSnap.id, ...retreatSnap.data() } as RetreatReq;
};
