import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';
import { Constants} from '../../class/constants';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  data = '2'

  country: any = Constants.COUNTRIES;
  constructor(
    private communicationService: CommunicationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.country,'rohit')
  }
  countrySelected(team: any) {
    this.communicationService.setData(team);
    this.router.navigateByUrl('/teams');
  }
}
