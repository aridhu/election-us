import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from './election';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ElectionlistService {
  election: Observable<Election | null>;
  electionCollection: AngularFirestoreCollection<Election>;
  electionlist: Observable<Election[]>;

  constructor(private afs: AngularFirestore) { 
    this.electionCollection = this.afs.collection<Election>('electionlist', ref => ref.orderBy('year', 'desc'));
    this.electionlist = this.electionCollection.valueChanges();
  }
   
}
