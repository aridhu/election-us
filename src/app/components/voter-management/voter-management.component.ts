import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { MockElection2, CandidateData } from 'src/app/shared/services/election';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CandidatesService } from 'src/app/shared/services/candidates.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { ViewCandidatesDialog } from '../candidate-management/candidate-management.component';
import { VotersService } from 'src/app/shared/services/voters.service';

@Component({
  selector: 'app-voter-management',
  templateUrl: './voter-management.component.html',
  styleUrls: ['./voter-management.component.scss']
})
export class VoterManagementComponent implements OnInit {

  electionCollections: Observable<MockElection2[]>;
  electionlist: MockElection2[];
  candidates: CandidateData[];
  
  displayedColumns: string[] = ['createddate','title', 'author', 'candidates', 'myvote'];
  dataSource: MatTableDataSource<MockElection2>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(public votersService: VotersService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public dialog: MatDialog) { 
      if(this.authService.userData != null ){
        this.electionCollections = this.votersService.electionlist;
        if(this.electionCollections != null){
              this.electionCollections.subscribe((electionlist: MockElection2[]) => {
                if(electionlist.length > 0){
                  this.electionlist = electionlist;
                  this.dataSource = new MatTableDataSource<MockElection2>(electionlist);
                  this.dataSource.paginator = this.paginator;
                  console.log('Mock List', this.electionlist);
                }
          });  
        }
        

    } else {
      this.router.navigate(['../sign-in']);
    }
    }
  ngOnInit() {
  }

  contestDialog(mockElection: MockElection2){
    let notadded: Boolean = true;
    this.candidates =   mockElection.candidates;
    console.log('candidates', this.candidates);
    if(this.candidates){
      this.candidates.forEach(c => {
         if(c.candidate == this.authService.userData.displayName){
            notadded = false;
         }
      });
    }
    if(notadded) {
      this.router.navigate(['/dashboard/add-candidate'], { 
        queryParams: { mockid: mockElection.id, title: mockElection.title }});
    } else {
      alert("you are already contesting " + mockElection.title);
    }
    
  }

  candidateDialog(mockElection: MockElection2){
    this.candidates = mockElection.candidates;
    const dialogRef = this.dialog.open(ViewCandidatesDialog, {
      width: '50%',
       data: this.candidates});
  }

  myVote(mockElection: MockElection2){
    console.log('my vote');
    this.router.navigate(['/dashboard/myvote'], { 
      queryParams: { mockid: mockElection.id, title: mockElection.title }});
  }

}
