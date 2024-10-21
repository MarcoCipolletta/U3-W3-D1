import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { NavbarComponent } from './mainComponents/navbar/navbar.component';
import { CartComponent } from './mainComponents/cart/cart.component';
import { provideHttpClient } from '@angular/common/http';
import { SharedCardModule } from './shared/shared-card.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferitiComponent,
    NavbarComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedCardModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
