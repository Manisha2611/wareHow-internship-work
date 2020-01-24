import { NgModule, Output } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutputComponent } from './output/output.component';



const routes: Routes = [
    {
      path:'output',component:OutputComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
