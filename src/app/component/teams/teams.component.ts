import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Constants} from '../../class/constants';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  selectedTeam: string ='';
  team: any = Constants.TEAMS;
  teamData:any;
  countries : any = Constants.COUNTRIES;
  totalCountries: any = [];
  allPlayers: any = [];
  constructor(
    private communicationService: CommunicationService
  ) { }

  ngOnInit(): void {

  this.getAllCountries();

    this.communicationService.currentData.subscribe( data => {
      if( data != '') {
        this.selectedTeam = data;
        this.team = this.team[data]
        this.teamData = this.team?.['players'];
      }      
    })

    console.log(this.teamData  ,'rohitttt');
  }

  ngOnDestroy() {
    this.communicationService.setData('');
  }

  getAllCountries() {
    this.countries.forEach ( (da: any) => {
      this.totalCountries.push(da?.name);
    })
    console.log(this.totalCountries,'roh');
    this.getAllPalyers();
  }

  getAllPalyers() {
    this.totalCountries.forEach((element: any) => {
      this.team[element];
      this.allPlayers.push(this.team[element]);
      console.log(this.allPlayers,'ro');

    });
  }
}
