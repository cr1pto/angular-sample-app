import { Routes } from "@angular/router";
import { CallbackComponent } from "./components/callback/callback.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { authGuard } from "./auth.guard";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent },
  { path: "callback", component: CallbackComponent, canActivate: [authGuard] },
  { path: "notfound", component: NotFoundComponent, canActivate: [authGuard] },
  { path: "users/:id", component: UserInfoComponent, canActivate: [authGuard] },
  { path: "**", redirectTo: "notfound" }, // Redirect to home for any unknown routes
];
