import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

import { AuthGuard } from "../../shared/guard/auth.guard";
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { ElectionManagementComponent } from 'src/app/components/election-management/election-management.component';
import { CandidateManagementComponent } from 'src/app/components/candidate-management/candidate-management.component';
import { VoterManagementComponent } from 'src/app/components/voter-management/voter-management.component';
import { ResultManagementComponent } from 'src/app/components/result-management/result-management.component';
import { MockElectionsComponent } from 'src/app/components/mock-elections/mock-elections.component';
import { SetupMockComponent } from 'src/app/components/mock-elections/setup-mock/setup-mock.component';
import { ListMockComponent } from 'src/app/components/mock-elections/list-mock/list-mock.component';
import { AddCandidateComponent } from 'src/app/components/candidate-management/add-candidate/add-candidate.component';
import { MyvoteComponent } from 'src/app/components/voter-management/myvote/myvote.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/welcome', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: 'welcome', 
        component: WelcomeComponent,
      },
      { path: 'manage-mock-elections', 
        component: MockElectionsComponent,
        children: [
          { path: 'list-mock-election',
            component: ListMockComponent
          },
          { path: 'setup-mock-election',
            component: SetupMockComponent
          }
        ]
      },
      { path: 'manage-elections', 
        component: ElectionManagementComponent
      },
      { path: 'manage-candidates', 
        component: CandidateManagementComponent,
        canActivate: [AuthGuard], 
      },
      { path: 'add-candidate', 
        component: AddCandidateComponent,
        canActivate: [AuthGuard], 
      },
      { path: 'manage-voters', 
        component: VoterManagementComponent,
        canActivate: [AuthGuard], 
      },
      { path: 'myvote', 
        component: MyvoteComponent,
        canActivate: [AuthGuard], 
      },
      { path: 'manage-results', 
        component: ResultManagementComponent,
        canActivate: [AuthGuard], 
      }


    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
