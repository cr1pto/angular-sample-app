import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  login() {
    this.authService.login();
  }
}
