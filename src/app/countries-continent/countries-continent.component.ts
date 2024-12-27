import { Component } from '@angular/core';
import {ContinentModel} from '../models/continent.model';
import {CountriesService} from '../services/countries.service';

@Component({
  selector: 'app-countries-continent',
  standalone: true,
  imports: [],
  templateUrl: './countries-continent.component.html',
  styleUrl: './countries-continent.component.scss'
})
export class CountriesContinentComponent {
  data: ContinentModel | undefined;

  constructor(private countriesSrv: CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries() {
    const continentName = 'North America';
    this.countriesSrv.getCountryFromContinent(continentName).subscribe((res:any) =>{
      this.data = res;
      console.log(this.data);
    })
  }
}
