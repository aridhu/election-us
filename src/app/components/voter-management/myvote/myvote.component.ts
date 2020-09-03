import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myvote',
  templateUrl: './myvote.component.html',
  styleUrls: ['./myvote.component.scss']
})
export class MyvoteComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  ngOnInit(): void {
    
  }

  castMyVote(f: string){
    console.log('My vote to: ', f);
  }
}
