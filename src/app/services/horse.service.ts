import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";

import { Horse } from "../models/horse.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  horsesCollection: AngularFirestoreCollection<Horse>;
  horses: Observable<Horse[]>;

  constructor(public afs: AngularFirestore) { 
    this.horsesCollection = this.afs.collection('horses', ref => {
      return ref.orderBy('name');
    });
    this.horses = this.horsesCollection.valueChanges();
  }

  getHorses(){
    return this.horses;
  }
}
