import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/services/users.service";
import { ToastMessageComponent } from "../toast-message/toast-message.component";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  @ViewChild(ToastMessageComponent)
  private toast: ToastMessageComponent;
  user;
  readonly = true;
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

  onEditClick() {
    this.readonly = false;
  }

  onFormSubmit() {
    this.usersService.editUserById(this.user.id, this.user).subscribe(
      data => {
        this.toast.showSuccess();
        //link to home:
      },
      err => {
        console.log(err);
      }
    );
  }
}
