import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/class/constants';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: any = Constants.MATCHES;
  matchSelected: boolean = false;
  matchData: any;
  played: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  selectedMatch(index: any) {
    this.matchSelected = true;
    this.played = this.matches[index].played;
    this.matchData = this.matches[index].summary;
  }

  close () {
    this.matchSelected = false;
  }
}
