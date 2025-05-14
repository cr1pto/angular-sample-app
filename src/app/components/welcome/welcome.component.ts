import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-welcome",
  imports: [],
  templateUrl: "./welcome.component.html",
  styleUrl: "./welcome.component.css",
})
export class WelcomeComponent {
  authService = inject(AuthService);
  userName = this.authService.getUserInfo().then((userInfo) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(
      "🚀 ~ WelcomeComponent ~ userName=this.authService.getUserInfo ~ userInfo:",
      userInfo
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = userInfo as any;
    return user?.name ?? "can't retrieve name";
  });
}
