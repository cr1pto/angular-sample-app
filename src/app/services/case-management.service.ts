import { HttpHeaders, HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Attorney } from "../interfaces/attorney";
import { Case } from "../interfaces/case";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class CaseManagementService {
  private defaultHttpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });
  private apiRoot = "https://localhost:5071";
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private attorneysEndpoint = `${this.apiRoot}/attorneys`;
  private casesEndpoint = `${this.apiRoot}/cases`;
  private judgesEndpoint = `${this.apiRoot}/judges`;

  //todo: use another oauth flow
  setToken() {
    const token = this.authService.getAccessToken();
    this.defaultHttpHeaders = this.defaultHttpHeaders.set(
      "Authorization",
      "Bearer " + token
    );
  }

  addNewAttorney(attorney: Attorney): Observable<Attorney> {
    console.log(
      "🚀 ~ CaseManagementService ~ addNewAttorney ~ attorney:",
      attorney
    );
    this.setToken();
    return this.http
      .post<Attorney>(this.attorneysEndpoint, attorney, {
        headers: this.defaultHttpHeaders,
      })
      .pipe(
        tap((t) => {
          console.log(t);
          return of(t);
        }),
        catchError((err, res) => {
          console.log("🚀 ~ CaseManagementService ~ catchError ~ res:", res);
          console.log(err);
          return of({});
        })
      );
  }

  getCases(): Observable<Case[]> {
    this.setToken();
    return this.http
      .get<Case[]>(this.casesEndpoint, { headers: this.defaultHttpHeaders })
      .pipe(
        tap((t) => {
          console.log(t);
          return of(t);
        }),
        catchError((err, res) => {
          console.log("🚀 ~ CaseManagementService ~ catchError ~ res:", res);
          console.log(err);
          return of([]);
        })
      );
  }

  getAttorneys(): Observable<Attorney[]> {
    this.setToken();
    return this.http
      .get<Attorney[]>(this.attorneysEndpoint, {
        headers: this.defaultHttpHeaders,
      })
      .pipe(
        tap((t) => {
          console.log("🚀 ~ CaseManagementService ~ tap ~ t:", t);
          return of(t);
        }),
        catchError((err, res) => {
          console.log("🚀 ~ CaseManagementService ~ catchError ~ res:", res);
          console.log(err);
          return of([]);
        })
      );
  }
}
