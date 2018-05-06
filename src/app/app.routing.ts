import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HolidayListComponent }   from './holiday-list/holiday-list.component';
import { HolidayDetailComponent }      from './holiday-detail/holiday-detail.component';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'list', component: HolidayListComponent },
  { path: 'detail/:date/:name', component: HolidayDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}