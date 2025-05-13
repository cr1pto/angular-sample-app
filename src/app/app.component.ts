import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { OAuthModule } from "angular-oauth2-oidc";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, OAuthModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-sample";
}
