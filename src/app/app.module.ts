
import { MaterialModule } from "./material/material.module";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreRegisterComponent } from './pages/store-register/store-register.component';

import { GoogleMapsModule } from '@angular/google-maps'

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StoreRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    { provide: BUCKET, useValue: `salesapp-5d475.appspot.com/imagenes` }
   //https://firebasestorage.googleapis.com/v0/b/salesapp-5d475.appspot.com/o?name=name-your-file-path-here
   //https://firebasestorage.googleapis.com/v0/b/salesapp-5d475.appspot.com%2Fimagenes%2F/o?name=name-your-file-path-here

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
