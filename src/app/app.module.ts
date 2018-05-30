import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectorsComponent } from './directors/directors.component';
import { routing } from './app.routing';
import { MinutesComponent } from './minutes/minutes.component';
import { ManagementComponent } from './management/management.component';
import { BudgetComponent } from './budget/budget.component';
import { DocsComponent } from './docs/docs.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    DirectorsComponent,
    MinutesComponent,
    ManagementComponent,
    BudgetComponent,
    DocsComponent,
    EncyclopediaComponent,
    AdminComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    Ng4TwitterTimelineModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
