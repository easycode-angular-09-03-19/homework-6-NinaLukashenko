import { Component, OnInit, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-toast-message",
  templateUrl: "./toast-message.component.html",
  styleUrls: ["./toast-message.component.css"],
  styles: [
    `
      :host ::ng-deep button {
        margin-right: 0.25em;
      }

      :host ::ng-deep .custom-toast .ui-toast-message {
        color: #ffffff;
        background: #fc466b;
        background: -webkit-linear-gradient(to right, #3f5efb, #fc466b);
        background: linear-gradient(to right, #3f5efb, #fc466b);
      }

      :host ::ng-deep .custom-toast .ui-toast-close-icon {
        color: #ffffff;
      }
    `
  ],
  providers: [MessageService]
})
export class ToastMessageComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Congratulations!",
      detail: "The info is updated!"
    });
  }

  // clear() {
  //   this.messageService.clear();
  // }
}
