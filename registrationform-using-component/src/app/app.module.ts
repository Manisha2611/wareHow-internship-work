import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from './api-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstformComponent } from './firstform/firstform.component';
import { EditformComponent } from './editform/editform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirstformComponent,
    EditformComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
