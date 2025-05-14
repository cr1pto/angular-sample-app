/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from "@angular/forms";
import { Attorney } from "../../interfaces/attorney";
import { CaseManagementService } from "../../services/case-management.service";
import { tap, of, Subscription } from "rxjs";

@Component({
  selector: "app-attorney-form",
  imports: [CommonModule, FormsModule],
  templateUrl: "./attorney-form.component.html",
  styleUrl: "./attorney-form.component.css",
})
export class AttorneyFormComponent implements OnInit, OnDestroy {
  formBuilder = inject(FormBuilder);
  attorney: Attorney = {};
  attorneyForm!: FormGroup;
  caseManagementService = inject(CaseManagementService);

  attorneys$!: Subscription;
  attorneyObs$!: Subscription;

  ngOnDestroy(): void {
    this.attorneys$?.unsubscribe();
    this.attorneyObs$?.unsubscribe();
  }

  ngOnInit(): void {
    this.attorneyForm = this.formBuilder.group({
      attorneyName: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
      attorneyBarNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
      attorneyFirmName: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
      attorneyPhoneNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
      attorneyEmail: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.email,
      ]),
      attorneyType: new FormControl("", [Validators.required]),
    });
  }
  onSubmitAttorneyForm(event: any) {
    console.log(
      "🚀 ~ AttorneyFormComponent ~ onSubmitAttorneyForm ~ event:",
      event
    );

    this.attorney.id = "1234-1324-123434";
    const observableResult = this.caseManagementService
      .addNewAttorney(this.attorney)
      .pipe(
        tap((t) => {
          console.log(t);
          return of(t);
        })
      );

    const attorneyObs = this.caseManagementService.getAttorneys().pipe(
      tap((t) => {
        console.log("🚀 ~ AttorneyFormComponent ~ tap ~ t:", t);

        return of(t);
      })
    );

    this.attorneyObs$ = attorneyObs.subscribe();

    this.attorneys$ = observableResult.subscribe();

    this.attorneyForm.reset();
  }
}
