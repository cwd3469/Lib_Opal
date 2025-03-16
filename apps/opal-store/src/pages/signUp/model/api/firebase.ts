import { auth, collection, db, getDocs, query } from "@/shared/firebase";
import { ChurchGetReq } from "../../interface";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const collectionName = "church";

/**
 * 수련회 리스트 조회 firebase api
 * @return RetreatReq[]
 */
export const getChurchDoc = async (): Promise<ChurchGetReq[]> => {
  const churchRef = collection(db, collectionName);

  const usersQuery = query(churchRef);

  const querySnapshot = await getDocs(usersQuery);

  const church = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      name: data.name,
      logo: data.logo,
      id: doc.id,
    };
  });

  return church;
};

// 회원가입
export const signUp = async (param: {
  email: string;
  password: string;
  name: string;
  term: number;
}) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    param.email,
    param.password
  );
  return userCredential.user;
};

// 로그인
export const signIn = async (param: { email: string; password: string }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    param.email,
    param.password
  );
  return userCredential.user;
};

// 로그아웃
export const logOut = async () => {
  await signOut(auth);
};
