import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: "app-callback",
  template: "<p>Loading...</p>", // Simple loading message
})
export class CallbackComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) {}

  ngOnInit() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.router.navigate(["/"]); // Redirect to your desired route after successful authentication
    });
  }
}
