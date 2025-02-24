export interface RetreatReq extends RetreatCreateFormInfo {
  id: string;
}

export type RetreatCreateFormInfo = {
  retreatTitle: string;
  retreatContents: string;
  retreatPlace: string;
  retreatStartAt: string;
  retreatEndAt: string;
  retreatInstructor?: string;
  retreatInstructorEmail?: string;
  retreatInstructorMinistry?: string;
  retreatInstructorPhoneNumber?: string;
};
