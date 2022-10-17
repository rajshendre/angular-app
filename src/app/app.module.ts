import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'; 
import { ProductComponent } from './product/product.component';
import { BrandsComponent } from './brands/brands.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandsComponent,
    OffersComponent,
    ContactComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
