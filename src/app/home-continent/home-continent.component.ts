import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../services/countries.service';
import {ContinentModel} from '../models/continent.model';

@Component({
  selector: 'app-home-continent',
  standalone: true,
  imports: [],
  templateUrl: './home-continent.component.html',
  styleUrl: './home-continent.component.scss'
})
export class HomeContinentComponent {

  data: ContinentModel | undefined;

  constructor(private countriesSrv: CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }

  // push to CountriesContient component

  getCountries() {
    const continentName = 'North America';
    this.countriesSrv.getCountryFromContinent(continentName).subscribe((res:any) =>{
      this.data = res;
      console.log(this.data);
    })
  }
}
