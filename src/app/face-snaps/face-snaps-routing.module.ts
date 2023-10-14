import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/components/landing-page/landing-page.component';
import { SingleSnapFaceComponent } from './components/single-snap-face/single-snap-face.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
  {path: ':id', component: SingleSnapFaceComponent, canActivate: [AuthGuard]},
  {path: '', component: LandingPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}
