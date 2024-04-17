import {Component, inject} from '@angular/core';
import {SubjectsService} from "../../services/subjects.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-subjects',
  standalone: true,
  templateUrl: './subjects.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrls: ['./subjects.component.scss']
})
export default class SubjectsComponent {

  #subjectsService = inject(SubjectsService);

  subjects$ = this.#subjectsService.getSubjects();

}
