import { Routes } from "@angular/router";
import { CallbackComponent } from "./components/callback/callback.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "callback", component: CallbackComponent },
  { path: "notfound", component: NotFoundComponent },
  { path: "users/:id", component: UserInfoComponent },
  { path: "**", redirectTo: "notfound" }, // Redirect to home for any unknown routes
];
