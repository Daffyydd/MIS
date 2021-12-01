import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './modules/main/main.component';
import { FooterComponent } from './modules/main/footer/footer.component';
import { HeaderComponent } from './modules/main/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuSidebarComponent } from './modules/main/menu-sidebar/menu-sidebar.component';
import { MenuItemComponent } from './shared/menu-item/menu-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ButtonComponent } from './shared/button/button.component';
import { DropdownMenuComponent } from './shared/dropdown/dropdown-menu/dropdown-menu.component';
import { UserComponent } from './modules/main/header/user/user.component';
import { MessagesComponent } from './modules/main/header/messages/messages.component';
import { NotificationsComponent } from './modules/main/header/notifications/notifications.component';
import { LoginComponent } from './modules/account/login/login.component';
import { ForgotPasswordComponent } from './modules/account/forgot-password/forgot-password.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialThemeModule } from './shared/material-theme/material-theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MaterialThemeModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuSidebarComponent,
    MenuItemComponent,
    DropdownComponent,
    ButtonComponent,
    DropdownMenuComponent,
    UserComponent,
    MessagesComponent,
    NotificationsComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
   // fakeBackendProvider,
  ],
})
export class AppModule {}
