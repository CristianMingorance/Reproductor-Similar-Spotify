import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import {DataService} from './service/data.service';
import { SideBarComponent } from './side-bar/side-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoComponent,
    ReproductorComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
