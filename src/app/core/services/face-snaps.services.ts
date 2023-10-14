import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {v4 as uuidv4} from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FaceSnapsServices {

  constructor(private http: HttpClient){ }

  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps() : Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  snapFaceSnapById(faceSnapId: number, snapType: "snap" | "unsanp"): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(facesnap =>({
        ...facesnap,
        snaps: facesnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
    )
  }

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap>{
    return this.getAllFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        createdDate: new Date(),
        id: previousFacesnap.id + 1,
        snaps: 0,
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>(
        `http://localhost:3000/facesnaps`,
        newFaceSnap
      ))
    )
  }

}
