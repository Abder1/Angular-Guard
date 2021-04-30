import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ProductComponent } from './product.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardGuard } from './auth-guard.guard';
import { DeactivateGuard } from './deactivate.guard';
import { CanloadGuard } from './canload.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent, canDeactivate: [DeactivateGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuardGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./amin/admin.module').then(m => m.AdminModule), canLoad: [CanloadGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, ProductService, AuthGuardGuard, DeactivateGuard, CanloadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
