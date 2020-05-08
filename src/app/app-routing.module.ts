import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRegisterComponent } from './pages/store-register/store-register.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  { path: 'register', component: StoreRegisterComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
