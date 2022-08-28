import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./Services/accounts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accountsService.addAccount(newAccount);
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accountsService.changeStatus(updateInfo)
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
