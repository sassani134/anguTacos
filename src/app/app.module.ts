import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DroiteGauchePipe } from './droite-gauche.pipe';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasketService } from './basket.service';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DroiteGauchePipe,
    MenuDetailComponent,
    NavbarComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
