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
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { FooterComponent } from './footer/footer.component';
// for PDF storage and Auth
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { DropZoneDirective } from './drop-zone.directive';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { UploadMinutesComponent } from './upload-minutes/upload-minutes.component';
import { UploadBudgetComponent } from './upload-budget/upload-budget.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { EditHeadlineComponent } from './edit-headline/edit-headline.component';
import { DisplayHeadlineComponent } from './display-headline/display-headline.component';
import { DisplayMeetingComponent } from './display-meeting/display-meeting.component';
import { FlashMessagesModule } from 'angular2-flash-messages';



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
    FooterComponent,
    DropZoneDirective,
    UploadDocumentsComponent,
    UploadMinutesComponent,
    UploadBudgetComponent,
    EditMeetingComponent,
    EditHeadlineComponent,
    DisplayHeadlineComponent,
    DisplayMeetingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    Ng4TwitterTimelineModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
    afs.firestore.enablePersistence();
  }
}
