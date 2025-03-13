import { ChurchCreateInputInfo } from "../../interface";
import { db, collection, addDoc } from "@/shared/firebase";

type Params = {
  dto: ChurchCreateInputInfo;
};

const collectionName = "church";

const collectionDB = collection(db, collectionName);

export async function createChurch({ dto }: Params) {
  console.log(dto);
  const { logo, name, space } = dto;
  try {
    const red = await addDoc(collectionDB, { logo, name, space });
    console.log(red);
    return red;
    // // 소속된 사용자 추가 (초기 owner 설정)
    // const memberRef = doc(
    //   collection(db, `companies/${companyId}/members`),
    //   ownerUid
    // );
    // await setDoc(memberRef, {
    //   role: "admin",
    // });

    // console.log(`Company ${companyName} created with owner ${ownerUid}`);
  } catch (error) {
    console.error("Error creating company:", error);
  }
}
