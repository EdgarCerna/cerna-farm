import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { Cow } from "../models/cow.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CowService {
  cowsCollection: AngularFirestoreCollection<Cow>;
  cows: Observable<Cow[]>;

  constructor(public afs: AngularFirestore) { 
    this.cowsCollection = this.afs.collection('cows', ref => {
      return ref.orderBy('name');
    });
    this.cows = this.cowsCollection.valueChanges();
  }

  getCows(){
    return this.cows;
  }
}
