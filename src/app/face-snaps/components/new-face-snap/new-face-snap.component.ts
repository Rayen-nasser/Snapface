import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsServices } from '../../../core/services/face-snaps.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent {

  snapForm!: FormGroup
  faceSnapPreview$!: Observable<FaceSnap>
  urlRegex!: RegExp

  constructor(private formBuiller: FormBuilder,
    private faceSnapsService: FaceSnapsServices,
    private router: Router){ }

  ngOnInit() : void{
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuiller.group({
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: 'blur'
    })
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
      }))
    )
  }

  onSubmitForm(){
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe()
  }

}
