import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cv', component: CvComponent },
  { path: 'other', component: OthersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HomePageComponent, CvComponent];
