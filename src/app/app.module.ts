
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
import { MainComponent } from './pages/main/main.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    StoreRegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatCardModule
  ],
  providers: [
    //{ provide: BUCKET, useValue: `salesapp-5d475.appspot.com/` }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
