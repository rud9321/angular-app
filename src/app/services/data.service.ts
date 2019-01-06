import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: Http) {}

  getUsers() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(map(res => res.json()));
  }
  getPosts() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .pipe(map(res => res.json()));
  }
  getPostDetail(id: number) {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .pipe(map(res => res.json()));
  }
}
