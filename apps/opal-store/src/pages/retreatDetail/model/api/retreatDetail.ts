import { doc, getDoc } from "firebase/firestore";
import { db } from "@/shared/firebase";

import { RetreatReq } from "../../../retreat/interface/data";

const collectionName = "retreat";

/**
 * 수련회 리스트 조회 firebase api
 * @return RetreatReq[]
 */
export const getRetreatDetailDoc = async (retreatId?: string) => {
  if (!retreatId) return;
  const retreatRef = doc(db, collectionName, retreatId);
  const retreatSnap = await getDoc(retreatRef);
  return { id: retreatSnap.id, ...retreatSnap.data() } as RetreatReq;
};
