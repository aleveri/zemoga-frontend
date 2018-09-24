import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { DataService } from '../../Services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private spinner: Ng4LoadingSpinnerService,
    private data: DataService,
    public authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    if (!this.data.verified) {
      this.spinner.show();
      this.userService.find(this.data.userId).subscribe((x: any) => {
        if (!x.authId) {
          this.router.navigate(['dashboard/user/create']);
        }
        this.data.verified = true;
      },
        error => {
          console.log(error.error);
          this.spinner.hide();
        });
    }
  }

  update() {
    this.router.navigate(['dashboard/user/update']);
  }

  vote() {
    this.router.navigate(['dashboard/vote/create']);
  }
}
