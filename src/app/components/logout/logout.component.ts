import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-logout",
  imports: [],
  templateUrl: "./logout.component.html",
  styleUrl: "./logout.component.css",
})
export class LogoutComponent {
  private readonly authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
