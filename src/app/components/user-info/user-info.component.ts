/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of, switchMap } from "rxjs";

@Component({
  selector: "app-user-info",
  imports: [CommonModule],
  templateUrl: "./user-info.component.html",
  styleUrl: "./user-info.component.css",
})
export class UserInfoComponent {
  @Input() id = "";
  user: any;
  private readonly route = inject(ActivatedRoute);
  users$: any;
  selectedId!: number;
  constructor() {
    // auto subscribed because of async pipe in template
    this.users$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get("id"));
        console.log(
          "🚀 ~ UserInfoComponent ~ switchMap ~ selectedId:",
          this.selectedId
        );
        // return this.service.getHeroes();
        return of(null);
      })
    );
  }

  logout() {
    throw new Error("Method not implemented.");
  }
}
