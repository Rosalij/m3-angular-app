import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'converter', component: ConverterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];