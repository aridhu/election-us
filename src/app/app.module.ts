import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Firebase services + enviorment module
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ElectionManagementComponent, ViewResultDialog } from './components/election-management/election-management.component';
import { CandidateManagementComponent, ViewCandidatesDialog } from './components/candidate-management/candidate-management.component';
import { VoterManagementComponent } from './components/voter-management/voter-management.component';
import { ResultManagementComponent } from './components/result-management/result-management.component';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MockElectionsComponent } from './components/mock-elections/mock-elections.component';
import { SetupMockComponent } from './components/mock-elections/setup-mock/setup-mock.component';
import { ListMockComponent } from './components/mock-elections/list-mock/list-mock.component';
import { AddCandidateComponent } from './components/candidate-management/add-candidate/add-candidate.component';
import { MyvoteComponent } from './components/voter-management/myvote/myvote.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    WelcomeComponent,
    ElectionManagementComponent,
    CandidateManagementComponent,
    VoterManagementComponent,
    ResultManagementComponent,
    ViewResultDialog,
    ViewCandidatesDialog,
    MockElectionsComponent,
    SetupMockComponent,
    ListMockComponent,
    AddCandidateComponent,
    MyvoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  entryComponents: [
    ViewResultDialog,
    ViewCandidatesDialog
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }