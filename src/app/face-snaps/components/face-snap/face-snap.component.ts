import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsServices } from '../../../core/services/face-snaps.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  textButton!: string;

  constructor(private faceSnapService: FaceSnapsServices,private router: Router){

  }

  ngOnInit(){
    this.textButton = "oh snap!";
  }

  onAddSnap(){
    if(this.textButton === "oh snap!"){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap")
      this.textButton = "Oops unSnap!"
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsanp")
      this.textButton = "oh snap!"
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}

