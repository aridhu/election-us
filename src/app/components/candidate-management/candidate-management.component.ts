import { Component, OnInit, ViewChild, NgZone, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MockElection2, CandidateData } from 'src/app/shared/services/election';
import { MatTableDataSource, MatPaginator, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/shared/services/candidates.service';
import { MockElectionsComponent } from '../mock-elections/mock-elections.component';

@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.scss']
})
export class CandidateManagementComponent implements OnInit {

  electionCollections: Observable<MockElection2[]>;
  electionlist: MockElection2[];
  candidates: CandidateData[];
  
  displayedColumns: string[] = ['createddate','title', 'author', 'candidates', 'contest'];
  dataSource: MatTableDataSource<MockElection2>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(public candidatesService: CandidatesService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public dialog: MatDialog) { 
      if(this.authService.userData != null ){
        this.electionCollections = this.candidatesService.electionlist;
        if(this.electionCollections != null){
              this.electionCollections.subscribe((electionlist: MockElection2[]) => {
              this.electionlist = electionlist;
              this.dataSource = new MatTableDataSource<MockElection2>(electionlist);
              this.dataSource.paginator = this.paginator;
              console.log('Mock List', this.electionlist);
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

}

@Component({
  selector: 'view-result-dialog',
  templateUrl: 'view-result-dialog.html',
  styleUrls: ['./view-result-dialog.scss']
})
export class ViewCandidatesDialog {
  resultColumns: string[] = ['candidate'];
  dataSource: MatTableDataSource<CandidateData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(@Inject(MAT_DIALOG_DATA) public data: CandidateData[]) {
    this.dataSource = new MatTableDataSource<CandidateData>(data);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
