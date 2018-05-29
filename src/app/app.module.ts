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
    EncyclopediaComponent
  ],
  imports: [
    BrowserModule,
    routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
