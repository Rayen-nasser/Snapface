import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsServices } from '../../../core/services/face-snaps.services';
import {ActivatedRoute} from '@angular/router'
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-single-snap-face',
  templateUrl: './single-snap-face.component.html',
  styleUrls: ['./single-snap-face.component.scss']
})
export class SingleSnapFaceComponent {
  @Input()
  textButton!: string;
  faceSnap$!: Observable<FaceSnap>

  constructor(private faceSnapService: FaceSnapsServices,
    private route : ActivatedRoute) {}


  ngOnInit(){
    this.textButton = "oh snap!";
    let faceSnapId  = +this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)
  }

  onAddSnap(facesnapId: number){
    if(this.textButton === "oh snap!"){
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(facesnapId, "snap").pipe(
        tap(() =>  this.textButton = "Oops unSnap!")
      )
    }else{
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(facesnapId, "unsanp").pipe(
        tap(() =>  this.textButton = "oh snap!")
      )
    }
  }
}
