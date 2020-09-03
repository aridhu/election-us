import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Election, MockElection, MockElection2 } from './election';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MockElectionService {

  election: Observable<Election | null>;
  electionCollection: AngularFirestoreCollection<MockElection>;
  electionlist: Observable<MockElection2[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) { 
    this.electionCollection = this.afs.collection<MockElection2>('mocklist', 
        ref => ref.orderBy('createddate', 'desc').where(
        "userid","==",this.authService.userData.uid 
        ));
    if(this.electionCollection != null){
      this.electionlist = this.electionCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MockElection2;
          const id = a.payload.doc.id;
          console.log('doc id: ', id);
          return {id, ...data};
        }))
      
      );
    } else {
      this.electionCollection = this.afs.collection<MockElection2>('mocklist', 
        ref => ref.orderBy('createddate', 'desc'));
    }    
  }

  addMockElection(mockelection: MockElection) {
    // Persist a document id
    const id = this.afs.createId();
    this.afs.collection<MockElection>('mocklist').doc(id).set(mockelection);
  }
  
}
