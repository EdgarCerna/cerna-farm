import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { ManageAnimalsComponent } from './manage-animals/manage-animals.component';
import { ManageBlocksComponent } from './manage-blocks/manage-blocks.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

export const config = {
  apiKey: "AIzaSyCgIiTczurW92Z2HYe3cB8j4GetaeTd4kk",
  authDomain: "cerna-farm.firebaseapp.com",
  databaseURL: "https://cerna-farm.firebaseio.com",
  projectId: "cerna-farm",
  storageBucket: "cerna-farm.appspot.com",
  messagingSenderId: "292970980253",
  appId: "1:292970980253:web:2091095654c80b6a"
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ManageAnimalsComponent,
    ManageBlocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
