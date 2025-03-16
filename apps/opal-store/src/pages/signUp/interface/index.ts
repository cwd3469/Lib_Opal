export interface ChurchGetReq {
  id: string;
  logo: string;
  name: string;
}

export type UserInfo = {
  name: string;
  term: number;
  email: string;
};

export type SignUpInputInfo = UserInfo & {
  password: string;
  passwordReCheck: string;
  churchUid: string;
};
