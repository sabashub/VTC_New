import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { CarsComponent } from './components/cars/cars.component';



export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: FooterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cars', component: CarsComponent },
  // Add more routes as needed
];
