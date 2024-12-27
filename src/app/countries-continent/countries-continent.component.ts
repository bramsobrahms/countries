import { Component } from '@angular/core';
import {ContinentModel} from '../models/continent.model';
import {CountriesService} from '../services/countries.service';
import {ActivatedRoute} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-countries-continent',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './countries-continent.component.html',
  styleUrl: './countries-continent.component.scss'
})
export class CountriesContinentComponent {
  dataCountries: ContinentModel[] = [];

  constructor(
    private countriesSrv: CountriesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const name = params.get('name') || '';
      this.countriesSrv.getCountryFromContinent(name).subscribe((results : ContinentModel[]) => {
        this.dataCountries = results;
        console.log(this.dataCountries);
      })
    })
  }

}
