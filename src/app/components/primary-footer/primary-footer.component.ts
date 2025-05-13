import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-primary-footer",
  imports: [DatePipe],
  templateUrl: "./primary-footer.component.html",
  styleUrl: "./primary-footer.component.css",
})
export class PrimaryFooterComponent {
  currentDate = new Date();
}
