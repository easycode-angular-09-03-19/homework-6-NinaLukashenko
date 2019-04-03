import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.usersService.getUserById(id).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
