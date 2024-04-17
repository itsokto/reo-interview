import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {SUBJECTS} from "./data";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  getSubjects(): Observable<string[]> {
    return of(SUBJECTS).pipe(delay(2000));
  }
}
