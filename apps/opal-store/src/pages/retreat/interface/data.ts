export interface RetreatReq extends RetreatCreateFormInfo {
  id: string;
}

export type RetreatCreateFormInfo = {
  retreatTitle: string;
  retreatContents?: string;
  retreatPlace: string;
  retreatInstructor: string;
  retreatStartAt: string;
  retreatEndAt: string;
};
