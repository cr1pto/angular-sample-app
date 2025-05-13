import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CallbackComponent } from "./components/callback/callback.component";

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "callback", component: CallbackComponent },
];
