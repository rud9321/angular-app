import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { IUser } from "../Models/IUser";

@Component({
  selector: "app-http-services",
  templateUrl: "./http-services.component.html",
  styleUrls: ["./http-services.component.css"]
})
export class HttpServicesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  Posts: any;
  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.Posts = posts;
    });
  }
}
