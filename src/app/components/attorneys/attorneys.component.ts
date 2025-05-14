import { Component } from '@angular/core';
import { AttorneyFormComponent } from "../attorney-form/attorney-form.component";

@Component({
  selector: 'app-attorneys',
  imports: [AttorneyFormComponent],
  templateUrl: './attorneys.component.html',
  styleUrl: './attorneys.component.css'
})
export class AttorneysComponent {

}
