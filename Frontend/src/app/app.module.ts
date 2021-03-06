import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule, Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { AuthService} from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { HousingService, } from './services/housing.service';
import { UserServiceService } from './services/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent },
  {path: 'add-property', component: AddPropertyComponent },
  {path: 'rent-property', component: PropertyListComponent },
  {path:
    'property-detail/:id', component: PropertyDetailComponent,
     resolve: {prp: PropertyDetailResolverService} },
  {path: 'user/login', component: UserLoginComponent },
  {path: 'user/register', component: UserRegisterComponent },
  {path: '**', component: PropertyListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
