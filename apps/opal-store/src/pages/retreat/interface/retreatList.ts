export interface RetreatReq {
  id: string;
  title: string;
  contents: string;
  place: string;
  instructor: string;
  createAt: string;
  retreatStartAt: string;
  retreatEndAt: string;
}

export interface RetreatConvertReq extends RetreatReq {
  retreatId: string;
}

export interface AttendeesReq {
  id: string;
}

export interface AttendeesConvertReq extends AttendeesReq {
  attendeesId: string;
}
