import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstformComponent } from './firstform/firstform.component';
import { EditformComponent } from './editform/editform.component';

const routes: Routes = [
  {
    path:'firstform',component:FirstformComponent
  },
  {
    path:'editform',component:EditformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
