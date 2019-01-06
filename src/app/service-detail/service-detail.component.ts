import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-service-detail",
  templateUrl: "./service-detail.component.html",
  styleUrls: ["./service-detail.component.css"]
})
export class ServiceDetailComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: ActivatedRoute
  ) {}

  PostDetail: IPostDetail;
  ngOnInit() {
    let id = this.router.snapshot.params["id"];
    this.dataService.getPostDetail(id).subscribe(data => {
      this.PostDetail = data;
    });
  }
}
interface IPostDetail {
  userId: number;
  title: string;
  id: number;
  body: string;
}
