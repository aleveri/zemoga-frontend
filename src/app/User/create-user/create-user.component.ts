import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';
import { MarriageStatusEnum } from '../../Models/MarriageStatusEnum';
import { NgForm } from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng6-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @ViewChild(NgForm) form;

  user: User;
  marriageStatus: any;

  mask = [/\d/, /\d/];

  constructor(private userService: UserService,
    private spinner: Ng4LoadingSpinnerService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private router: Router,
    private data: DataService) {
    this.user = new User();
    this.user.authId = data.userId;
    this.marriageStatus = MarriageStatusEnum;
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  save() {
    this.spinner.show();
    this.user.authId = this.data.userId;
    this.userService.create(this.user).subscribe(x => {
      this.spinner.hide();
      this.data.verified = true;
      this.toastr.success('Success!');
      this.router.navigate(['dashboard']);
    },
      error => {
        this.toastr.error(error.error);
        this.spinner.hide();
      })
  }

}
