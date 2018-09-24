import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { DataService } from '../../Services/data.service';
import { NgForm } from '@angular/forms';
import { MarriageStatusEnum } from '../../Models/MarriageStatusEnum';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @ViewChild(NgForm) form;
  
  user: User;
  marriageStatus: any;

  mask = [/\d/, /\d/];

  constructor(private userService: UserService,
    private spinner: Ng4LoadingSpinnerService,
    private data: DataService,
    private router: Router) { 
      this.marriageStatus = MarriageStatusEnum;
      this.user = new User();
    }

  ngOnInit() {
    this.spinner.show();
    this.userService.find(this.data.userId).subscribe((x: any) => {
      this.user = x;
      this.spinner.hide();
    });
  }

  update() {
    this.userService.update(this.user).subscribe(x => {
      this.spinner.hide();
      this.router.navigate(['dashboard']);
    },
      error => {
        console.log(error.error);
        this.spinner.hide();
      });
  }

}
