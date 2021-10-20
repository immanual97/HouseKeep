import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AdloginComponent } from './components/adlogin/adlogin.component';
import { TcloginComponent } from './components/tclogin/tclogin.component';
import { RegisterComponent } from './components/register/register.component';
import { TcregisterComponent } from './components/tcregister/tcregister.component';
import { AdDashboardComponent } from './components/admin-controls/ad-dashboard/ad-dashboard.component';
import { AdTechnicianComponent } from './components/admin-controls/ad-technician/ad-technician.component';
import { AdServicesComponent } from './components/admin-controls/ad-services/ad-services.component';
import { AdWorkrequestComponent } from './components/admin-controls/ad-workrequest/ad-workrequest.component';
import { AdChangepasswordComponent } from './components/admin-controls/ad-changepassword/ad-changepassword.component';
import { TcChangepasswordComponent } from './components/technician-controls/tc-changepassword/tc-changepassword.component';
import { TcPaymentComponent } from './components/technician-controls/tc-payment/tc-payment.component';
import { TcAcceptanceComponent } from './components/technician-controls/tc-acceptance/tc-acceptance.component';
import { TcAddpriceComponent } from './components/technician-controls/tc-addprice/tc-addprice.component';
import { TcChangestatusComponent } from './components/technician-controls/tc-changestatus/tc-changestatus.component';
import { CuChangepasswordComponent } from './components/customer-controls/cu-changepassword/cu-changepassword.component';
import { CuHistoryComponent } from './components/customer-controls/cu-history/cu-history.component';
import { CuWorkrequestComponent } from './components/customer-controls/cu-workrequest/cu-workrequest.component';
import { CuStatusComponent } from './components/customer-controls/cu-status/cu-status.component';
import { CuAddressComponent } from './components/customer-controls/cu-address/cu-address.component';

const routes: Routes = [
  {path:'',component:HomeComponent}, //for loading page when no url given
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'adlogin',component:AdloginComponent},
  {path:'tclogin',component:TcloginComponent},
  {path:'register',component:RegisterComponent},
  {path:'tcregister',component:TcregisterComponent},
  {path:'admin/dashboard',component:AdDashboardComponent},
  {path:'admin/technician',component:AdTechnicianComponent},
  {path:'admin/services',component:AdServicesComponent},
  {path:'admin/workrequest',component:AdWorkrequestComponent},
  {path:'admin/changepass',component:AdChangepasswordComponent},
  {path:'technician/changepassword',component:TcChangepasswordComponent},
  {path:'technician/payed',component:TcPaymentComponent},
  {path:'technician/acceptance',component:TcAcceptanceComponent},
  {path:'technician/setprice',component:TcAddpriceComponent},
  {path:'technician/changeworkstatus',component:TcChangestatusComponent},
  {path:'customer/changepassword',component:CuChangepasswordComponent},
  {path:'customer/history',component:CuHistoryComponent},
  {path:'customer/workrequest',component:CuWorkrequestComponent},
  {path:'customer/status',component:CuStatusComponent},
  {path:'customer/address',component:CuAddressComponent},

  {path:'**',component:HomeComponent} //for loading page when random string in url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
