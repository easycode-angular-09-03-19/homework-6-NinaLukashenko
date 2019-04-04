import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private activedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activedRoute.snapshot.params["id"];
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
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 3000);
      },
      err => {
        console.log(err);
      }
    );
  }
}
