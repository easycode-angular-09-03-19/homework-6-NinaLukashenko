import { Component, OnInit, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-toast-message",
  templateUrl: "./toast-message.component.html",
  styleUrls: ["./toast-message.component.css"],
  providers: [MessageService]
})
export class ToastMessageComponent {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: "info",
      summary: "Congratulations!",
      detail: "The info is updated!"
    });
  }
}
