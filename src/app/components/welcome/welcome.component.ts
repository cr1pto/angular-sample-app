import { Component, inject, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";

@Component({
  selector: "app-welcome",
  imports: [],
  templateUrl: "./welcome.component.html",
  styleUrl: "./welcome.component.css",
})
export class WelcomeComponent implements OnInit {
  authService = inject(AuthService);
  userInfo: any;
  /**
   *
   */
  constructor() {}
  async ngOnInit(): Promise<void> {
    const response: any = await this.authService
      .getUserInfo()
      .then((res: any) => {
        return Promise.resolve(res);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
    console.log("🚀 ~ WelcomeComponent ~ .then ~ response:", response);

    this.userInfo = response?.info ?? "Unknown";
  }
}
