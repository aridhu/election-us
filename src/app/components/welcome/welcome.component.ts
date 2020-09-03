import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { 
    
  
  }

  ngOnInit() {
  }

  manageElection(){
    console.log('Manage Election');
    this.router.navigate(['/dashboard/manage-mock-elections']);
  }

  manageCandidate(){
    console.log('Manage Candidate');
    this.router.navigate(['/dashboard/manage-candidates']);
  }

  manageVote(){
    console.log('Manage Vote');
    this.router.navigate(['/dashboard/manage-voters']);
  }

  manageResult(){
    console.log('Manage Result');
    this.router.navigate(['/dashboard/manage-results']);
  }

}
