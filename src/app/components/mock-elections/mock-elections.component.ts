import { Component, OnInit, NgZone} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-elections',
  templateUrl: './mock-elections.component.html',
  styleUrls: ['./mock-elections.component.scss']
})
export class MockElectionsComponent implements OnInit {

  

  constructor(private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { 
    if(this.authService.userData != null ){        
      this.router.navigate(['/dashboard/manage-mock-elections/list-mock-election']);
    } else {
      this.router.navigate(['/sign-in']);
    }
    
  
  }
  ngOnInit() {
  }

  

}


