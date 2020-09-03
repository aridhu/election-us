import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockElection2, CandidateData } from 'src/app/shared/services/election';
import { CandidatesService } from 'src/app/shared/services/candidates.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {
  candidatedata: CandidateData;
  mockid: string;
  title: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private candidatesService: CandidatesService) { 
      this.candidatedata = {
        candidate: this.authService.userData.displayName,
        uid: this.authService.userData.uid,
        email: this.authService.userData.email,
        vote: 0
      }
    }

  ngOnInit() {
    this.route.queryParams.subscribe(m => {
      this.mockid = m.mockid;
      this.title = m.title;
    });
  }

  addContestant(){
    console.log('adding');
    this.candidatesService.addCandidate(this.mockid, this.candidatedata);
    this.router.navigate(['/dashboard/manage-candidates']);
  }

}
