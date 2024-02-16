import { Routes } from '@angular/router';

import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';
export const routes: Routes = [
        {path : 'batchdetails', component : BatchdetailsComponent},
        {path : 'batchlist', component : BatchlistComponent},
        {path : '', component : HomepageComponent},
        {path : '**', component : InvalidpageComponent},


];
