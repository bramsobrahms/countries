import { Routes } from '@angular/router';
import {HomeContinentComponent} from './home-continent/home-continent.component';
import {CountriesContinentComponent} from './countries-continent/countries-continent.component';

export const routes: Routes = [
  {path:'', component: HomeContinentComponent, title: 'Home Page'},
  {path:'home', component: HomeContinentComponent, title: 'Home Page'},
  {path:'continent/:name', component: CountriesContinentComponent, title: 'Countries from the continent'},
];
