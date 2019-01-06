import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { user } from "../model/user.model";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  //firstname.string="";
  constructor() {}

  ngOnInit() {}
  user = {};
  submitUser(user) {
    if (true) {
      alert("success");
    }
    console.log(user);
  }
}
