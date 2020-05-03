import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../../../environments/environment'

@NgModule({
    imports: [ 
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule
        
    ],
    exports: [
        
        AngularFireModule,
        AngularFireStorageModule
    ],
    providers: [
    ],
   
})
export class FirebaseModule {
    
}