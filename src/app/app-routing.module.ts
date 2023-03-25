import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedHeaderComponent } from './fixed-header/fixed-header.component';

const routes: Routes = [
{ path: 'header', component:FixedHeaderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
