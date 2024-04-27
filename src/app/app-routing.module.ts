import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeliveryComponentsComponent } from './components/delivery-components/delivery-components.component';
import { DisplayComponentsComponent } from './components/display-components/display-components.component';
import { DeliveryDateComponentsComponent } from './components/delivery-date-components/delivery-date-components.component';

const routes: Routes = [
 { path : 'home',component :HomeComponent},
 { path : '',component :HomeComponent},
 { path : 'delivery', component:DeliveryComponentsComponent },
 { path : 'display', component:DisplayComponentsComponent },
 { path : 'deliveryDate', component:DeliveryDateComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
