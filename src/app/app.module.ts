import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './routing';
import { MenuLeftComponent } from './main/menu-left/menu-left.component';
import { MenuHeaderComponent } from './main/menu-header/menu-header.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProfileComponent } from './main/profile/profile.component';
import { UserService } from './shared/user.service';
import { ContentComponent } from './main/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuLeftComponent,
    MenuHeaderComponent,
    LoginComponent,
    PageNotfoundComponent,
    ProfileComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
