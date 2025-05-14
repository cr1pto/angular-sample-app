import { Component, inject } from "@angular/core";
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-primary-nav",
  imports: [RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: "./primary-nav.component.html",
  styleUrl: "./primary-nav.component.css",
})
export class PrimaryNavComponent {
  activeRoute = "/";
  authService = inject(AuthService);
  userName = "";
  onRouterLinkActive(event: Event) {
    console.log("🚀 ~ PrimaryNavComponent ~ event:", event);
  }
  isActive(path: string) {
    // console.log("🚀 ~ PrimaryNavComponent ~ isActive ~ path:", path);
    return this.activeRoute === path;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  async getUserName() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo: any = await this.authService.getUserInfo();

    return userInfo?.name ?? "can't retrieve namer";
  }
}
