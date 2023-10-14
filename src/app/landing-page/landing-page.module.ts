import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  exports: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LandingPageModule { }
