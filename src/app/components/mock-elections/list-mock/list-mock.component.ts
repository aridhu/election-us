import { Component, OnInit, ViewChild, NgZone, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MockElectionService } from 'src/app/shared/services/mock-election.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MockElection } from 'src/app/shared/services/election';

@Component({
  selector: 'app-list-mock',
  templateUrl: './list-mock.component.html',
  styleUrls: ['./list-mock.component.scss']
})
export class ListMockComponent implements OnInit {
  electionCollections: Observable<MockElection[]>;
  electionlist: MockElection[];
  displayedColumns: string[] = ['createddate', 'state', 'title', 'author', 'action'];
  dataSource: MatTableDataSource<MockElection>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private electionlistService: MockElectionService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) { 
      if(this.authService.userData != null ){
        if(this.electionlistService != null){
          this.electionCollections = this.electionlistService.electionlist;
          if(this.electionCollections != null){
                this.electionCollections.subscribe((electionlist: MockElection[]) => {
                  if(electionlist.length > 0){
                    this.electionlist = electionlist;
                    console.log('Mock List', this.electionlist);
                    this.dataSource = new MatTableDataSource<MockElection>(electionlist);
                    this.dataSource.paginator = this.paginator;
                  } else {
                    console.log("Empty List");
                  }
            });  
          }
        }
    } else {
      this.router.navigate(['../sign-in']);
    }
    }

  ngOnInit() {
  }

  setupMockElection(){
    console.log("election setup");
    this.router.navigate(['/dashboard/manage-mock-elections/setup-mock-election']);
  }

  openPoll(election: MockElection){
    console.log("poll open");
  }

  closePoll(election: MockElection){
    console.log("poll closed");
  }

}

