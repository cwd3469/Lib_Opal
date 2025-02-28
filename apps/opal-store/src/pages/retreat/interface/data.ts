export interface RetreatReq extends RetreatInputFormInfo {
  id: string;
}

export type RetreatInputFormInfo = {
  retreatImage?: string[];
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
