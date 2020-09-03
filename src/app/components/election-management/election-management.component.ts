import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { ElectionlistService } from 'src/app/shared/services/electionlist.service';
import { Election, CandidateData } from 'src/app/shared/services/election';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  styleUrls: ['./election-management.component.scss']
})
export class ElectionManagementComponent implements OnInit {

  electionCollections: Observable<Election[]>;
  electionlist: Election[];
  displayedColumns: string[] = ['title', 'president', 'vp', 'results'];
  dataSource: MatTableDataSource<Election>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private electionlistService: ElectionlistService, public dialog: MatDialog) {
    this.electionCollections = this.electionlistService.electionlist;
    this.electionCollections.subscribe((electionlist: Election[]) => {
      this.electionlist = electionlist;
      this.dataSource = new MatTableDataSource<Election>(electionlist);
      this.dataSource.paginator = this.paginator;
    });
   }

   openDialog(candidates: CandidateData[]) {
     const dialogRef = this.dialog.open(ViewResultDialog, {
      width: '50%',
       data: candidates});
  }

  ngOnInit() {
    
  }

}

@Component({
  selector: 'view-result-dialog',
  templateUrl: 'view-result-dialog.html',
  styleUrls: ['./view-result-dialog.scss']
})
export class ViewResultDialog {
  resultColumns: string[] = ['candidate', 'vote'];
  dataSource: MatTableDataSource<CandidateData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(@Inject(MAT_DIALOG_DATA) public data: CandidateData[]) {
    this.dataSource = new MatTableDataSource<CandidateData>(data);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
