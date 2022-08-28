import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LoggingStatusService } from "../Services/logging-status.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers:[LoggingStatusService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(private loggingStatusService: LoggingStatusService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingStatusService.logToConsole(status);
  }
}
