import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: {animation: 'isLeft'}},
  { path: 'about-me', component: AboutMePageComponent, data: {animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutMePageComponent]
