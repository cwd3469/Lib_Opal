export type MembershipCreateFormInfo = MembershipReq & {
  id: string;
};

export type MembershipReq = {
  membershipName: string;
  membershipTerm: string;
  membershipBirthday: string;
  membershipShell: string;
  membershipState: string;
  membershipChurch: string;
};
