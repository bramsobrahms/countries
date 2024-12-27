import { Component } from '@angular/core';
import {ContinentModel} from '../models/continent.model';
import {CountriesService} from '../services/countries.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-countries-continent',
  standalone: true,
  imports: [],
  templateUrl: './countries-continent.component.html',
  styleUrl: './countries-continent.component.scss'
})
export class CountriesContinentComponent {
  data: ContinentModel | undefined;

  constructor(
    private countriesSrv: CountriesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const name = params.get('name') || '';
      this.countriesSrv.getCountryFromContinent(name).subscribe((results : ContinentModel) => {
        this.data = results;
        console.log(this.data);
      })
    })
  }

}
