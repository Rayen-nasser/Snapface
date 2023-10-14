import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { SingleSnapFaceComponent } from './components/single-snap-face/single-snap-face.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleSnapFaceComponent,
    NewFaceSnapComponent
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleSnapFaceComponent,
    NewFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ]
})
export class FaceSnapsModule { }
