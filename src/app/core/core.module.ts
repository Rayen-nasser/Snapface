import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import * as fr from "@angular/common/locales/fr";
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    { provide :LOCALE_ID , useValue:'fr-FR' },
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
