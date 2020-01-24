import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditformComponent } from './editform/editform.component';


const routes: Routes = [
  {path:'editform',component:EditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
