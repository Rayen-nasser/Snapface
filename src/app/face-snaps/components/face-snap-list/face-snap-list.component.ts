import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsServices } from '../../../core/services/face-snaps.services';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent  implements OnInit{
  // faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapsServices: FaceSnapsServices,){

  }

  ngOnInit(): void{
    // this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps()
    this.faceSnaps$ = this.faceSnapsServices.getAllFaceSnaps()
  }
}
