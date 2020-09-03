import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { MockElection2, CandidateData, MockEvent } from './election';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VotersService {
  electionCollection: AngularFirestoreCollection<MockElection2>;
  electionlist: Observable<MockElection2[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) { 
    this.electionCollection = this.afs.collection<MockElection2>('mocklist', 
        ref => ref.orderBy('createddate', 'desc').where("state","==","pollopen"));
    this.electionlist = this.electionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MockElection2;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
      
    );
  }

  addCandidate(id: string, candidate: CandidateData){
    console.log(id, candidate)
    const mockevent: MockEvent = {
      event: 'add candidate',
      date: new Date(),
      message: 'new candidate is contesting',
      author: candidate.candidate,
      userid: candidate.uid
    }
    this.electionCollection.doc(id).update({
        candidates: firebase.firestore.FieldValue.arrayUnion(candidate),
        events: firebase.firestore.FieldValue.arrayUnion(mockevent)
    });
  }

  getMockElection(mockid: string) {
    return this.electionCollection.doc(mockid).ref.get();
  }
}
