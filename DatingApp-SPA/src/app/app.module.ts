import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
=======

import { BsDropdownModule } from 'ngx-bootstrap';
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterCeptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
<<<<<<< HEAD
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoute } from './routes';
=======
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
<<<<<<< HEAD
      FormsModule,
      // tousethemoduleinloginform\\\\r\\\\nBrowserAnimationsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoute, {}),
      //  RouterModule.forChild(appRoute)
=======
      FormsModule, // tousethemoduleinloginform
      BrowserAnimationsModule,
      BsDropdownModule.forRoot()
>>>>>>> eac61ab11a931a3469b5e274263f66c51bbdaa8d
   ],
   providers: [
      AuthService,
      ErrorInterCeptorProvider,
      AlertifyService
   ],
   bootstrap: [
      AppComponent,
   ]
})
export class AppModule { }
