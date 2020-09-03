
export interface Election {
   title: string;
   subtitle: string;
   year: number;
   century: number;
   president: string;
   vp: string;
   candidates: CandidateData[];
}

export interface MockElection {
   author: string;
   userid: string;
   email: string;
   title: string;
   state: string;
   createddate: Date;
   events: MockEvent[];
}

export interface MockEvent {
   event: string;
   date: Date;
   message: string;
   author: string;
   userid: string;
}

export interface CandidateData {
   candidate: string;
   uid: string;
   email: string;
   vote: number;
 }

export interface MockElection2 {
   id: string;
   author: string;
   userid: string;
   email: string;
   title: string;
   subtitle: string;
   state: string;
   createddate: Date;
   president: string;
   vp: string;
   events: MockEvent[];
   candidates: CandidateData[];
}

