import { Component, OnInit, NgZone } from '@angular/core';
import { MockElection, MockEvent } from 'src/app/shared/services/election';
import { MockElectionService } from 'src/app/shared/services/mock-election.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-mock',
  templateUrl: './setup-mock.component.html',
  styleUrls: ['./setup-mock.component.scss']
})
export class SetupMockComponent implements OnInit {
  mockElection: MockElection;
  events: MockEvent[];
  author: string;
  errorMessage: string;

  mockelectionForm = this.fb.group({
    title: ['', Validators.required]

  });


  constructor(private authService: AuthService, private fb: FormBuilder,
    public router: Router, public ngZone: NgZone, private mockElectionService: MockElectionService) { 
    if(this.authService.userData != null ){        
      this.author = this.authService.userData.displayName;
    } else {
      this.router.navigate(['/sign-in']);
    }
      
  }

  ngOnInit() {
  }

  setupMock(){
    console.log("Updated: ", this.mockelectionForm);
    const title = this.mockelectionForm.get('title');
    console.log("title: " + title.value);
    if(title.value == ''){
       return this.errorMessage = "Please enter valid title";
    }
    this.events = [{
      event: 'setup',
      date: new Date(),
      message: 'mock election was setup',
      author: this.authService.userData.displayName,
      userid: this.authService.userData.uid
    }];
    this.mockElection = { 
      author: this.authService.userData.displayName,
      userid: this.authService.userData.uid,
      email: this.authService.userData.email,
      title: this.mockelectionForm.get('title').value,
      createddate: new Date(),
      state: 'new',
      events: this.events
    }
    this.mockElectionService.addMockElection(this.mockElection);
    this.router.navigate(['/dashboard/manage-mock-elections/list-mock-election']);
  }

  

}
