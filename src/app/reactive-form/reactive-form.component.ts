import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup;
  formSubmitted: boolean = false;
  emailPattern: string = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.InitializeFormGroup();
  }

  InitializeFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.minLength(3)]],
      lastname: [""],
      email: ["", Validators.pattern(this.emailPattern)],
      gender: ["", Validators.required],
      city: [""],
      country: ["Choose..."],
      password: [""]
    });
  }
  get myFormGroup() {
    return this.formGroup.controls;
  }
  formSubmit() {
    this.formSubmitted = true;
    if (this.formGroup.status === "VALID") {
      alert("form submitted..");
      console.log(this.formGroup.value);
    }
  }
}
