/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { OAuthModule, OAuthService } from "angular-oauth2-oidc";
import { PrimaryNavComponent } from "./components/primary-nav/primary-nav.component";
import { PrimaryFooterComponent } from "./components/primary-footer/primary-footer.component";
import { authConfig } from "./auth.config";

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
  private readonly oauthService = inject(OAuthService);
  private readonly router = inject(Router);
  // Use HashLocationStrategy for routing?
  useHash = false;

  // Set this to true, to use silent refresh; otherwise the example
  // uses the refresh_token via an AJAX coll to get new tokens.
  useSilentRefreshForCodeFlow = false;

  private configureCodeFlow() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then((_) => {
      if (this.useHash) {
        this.router.navigate(["/"]);
      }
    });

    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
