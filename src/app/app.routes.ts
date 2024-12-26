import { Routes } from '@angular/router';
import {HomeContinentComponent} from './home-continent/home-continent.component';

export const routes: Routes = [
  {path:'', component: HomeContinentComponent, title: 'Home Page'},
  {path:'home', component: HomeContinentComponent, title: 'Home Page'},
];
