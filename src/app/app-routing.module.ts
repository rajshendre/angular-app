import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'brands', component: BrandsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'contact', component: ContactComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
