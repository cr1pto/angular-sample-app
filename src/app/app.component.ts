import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { OAuthModule } from "angular-oauth2-oidc";
import { PrimaryNavComponent } from "./components/primary-nav/primary-nav.component";
import { PrimaryFooterComponent } from "./components/primary-footer/primary-footer.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    OAuthModule,
    PrimaryNavComponent,
    PrimaryFooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-sample";
}
