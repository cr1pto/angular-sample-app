/* eslint-disable @typescript-eslint/no-unused-vars */
import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "../auth.config";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  useHash = false;
  private readonly router = inject(Router);
  private oauthService = inject(OAuthService);
  constructor() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then((_) => {
      if (this.useHash) {
        this.router.navigate(["/"]);
      }
    });
  }

  isLoggedIn() {
    return (
      this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken()
    );
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getIdentityClaims() {
    return this.oauthService.getIdentityClaims();
  }
  async getUserInfo() {
    return await this.oauthService.loadUserProfile();
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  checkAuth(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
