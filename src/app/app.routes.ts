import { Routes } from "@angular/router";
import { CallbackComponent } from "./components/callback/callback.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { authGuard } from "./auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { CasesComponent } from "./components/cases/cases.component";
import { DefendantsComponent } from "./components/defendants/defendants.component";
import { AttorneysComponent } from "./components/attorneys/attorneys.component";
import { JudgesComponent } from "./components/judges/judges.component";
import { JurorsComponent } from "./components/jurors/jurors.component";
import { InmatesComponent } from "./components/inmates/inmates.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "welcome", component: WelcomeComponent, canActivate: [authGuard] },
  { path: "cases", component: CasesComponent, canActivate: [authGuard] },
  { path: "defendants", component: DefendantsComponent, canActivate: [authGuard] },
  { path: "attorneys", component: AttorneysComponent, canActivate: [authGuard] },
  { path: "judges", component: JudgesComponent, canActivate: [authGuard] },
  { path: "jurors", component: JurorsComponent, canActivate: [authGuard] },
  { path: "inmates", component: InmatesComponent, canActivate: [authGuard] },
  { path: "callback", component: CallbackComponent },
  { path: "notfound", component: NotFoundComponent },
  { path: "users/:id", component: UserInfoComponent, canActivate: [authGuard] }, // Protect this route with authGuard
  { path: "**", redirectTo: "notfound" }, // Redirect to home for any unknown routes
];
