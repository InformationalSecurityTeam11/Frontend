import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.css']
})
export class RequestsTableComponent implements OnInit{
  certificateData: any;

  constructor(private userService : UserService) {
  }

  ngOnInit() {
    // if role === AMDIN
    this.userService.getAllRequestsForAdmin().subscribe({
      next: value => {
        this.certificateData = value;
        console.log(this.certificateData[0].requestState)
      },
      error: err => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
        }
      }
    })
  }

}
