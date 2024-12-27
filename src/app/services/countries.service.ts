import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContinentModel} from '../models/continent.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  getCountryFromContinent(name: string): Observable<ContinentModel[]>{
    return this._http.get<ContinentModel[]>(`https://restcountries.com/v3.1/region/${name}`)
  }
}
