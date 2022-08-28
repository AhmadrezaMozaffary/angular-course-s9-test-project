import { Component, EventEmitter, Output } from "@angular/core";
import { LoggingStatusService } from "../Services/logging-status.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingStatusService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private loggingStatusService: LoggingStatusService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.loggingStatusService.logToConsole(accountStatus);
    // console.log("A server status changed, new status: " + accountStatus);
  }
}
