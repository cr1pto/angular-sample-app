import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://localhost:44385", // e.g., 'https://your-auth-server.com'
  redirectUri: window.location.origin + "/callback",
  postLogoutRedirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + "/silent-refresh.html",
  clientId: "angular_spa", //make more secure
  responseType: "code",
  dummyClientSecret: "secret",
  scope: "openid profile verification offline_access api1", // Add scopes as needed
  // disablePKCE: false,
  checkOrigin: true,
  requireHttps: true,
  //   pkce: true,
  showDebugInformation: true, // Optional: for debugging
};
