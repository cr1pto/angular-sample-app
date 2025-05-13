import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../auth.config";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  checkAuth(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
