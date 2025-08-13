import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { AboutComponent } from '../components/about-component/about-component';
import { LatestComponent } from '../components/latest-component/latest-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'latest', component: LatestComponent },
  { path: '**', redirectTo: '' }
];