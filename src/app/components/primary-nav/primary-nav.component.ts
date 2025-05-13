import { Component } from "@angular/core";

@Component({
  selector: "app-primary-nav",
  imports: [],
  templateUrl: "./primary-nav.component.html",
  styleUrl: "./primary-nav.component.css",
})
export class PrimaryNavComponent {
  activeRoute = "/";
  onRouterLinkActive(event: Event) {
    console.log(
      "🚀 ~ PrimaryNavComponent ~ onRouterLinkActive ~ event:",
      event
    );
  }
  isActive(path: string) {
    console.log("🚀 ~ PrimaryNavComponent ~ isActive ~ path:", path);
    return this.activeRoute === path;
  }
}
