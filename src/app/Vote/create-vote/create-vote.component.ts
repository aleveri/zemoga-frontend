import { Component, OnInit } from '@angular/core';
import { BoxService } from '../../Services/box.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { CombinedService } from '../../Services/combined.service';
import { DataService } from '../../Services/data.service';
import { Vote } from '../../Models/Vote';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent implements OnInit {

  boxes: any;
  vote: Vote;
  totalVotes: number;

  constructor(private boxService: BoxService,
    private combined: CombinedService,
    private spinner: Ng4LoadingSpinnerService,
    private data: DataService,
    private router: Router) {
    this.totalVotes = 0;
    this.vote = new Vote();
    this.vote.userId = this.data.userId;
  }

  ngOnInit() {
    this.spinner.show();
    this.combined.votingParams(['1', '5', this.data.userId]).subscribe((x: any) => {
      this.boxes = x[0];
      this.totalVotes = x[1];
      this.spinner.hide();
    });

  }

  save(box: any, nameBox: any) {
    this.spinner.show();
    this.vote.boxId = box;
    this.boxService.create(this.vote).subscribe(x => {
      this.boxService.count(this.data.userId).subscribe((y: any) => {
        this.totalVotes = y;
      });
    },
      (error) => {
        console.log(error);
        alert(error.error + ' for ' + nameBox);
        this.spinner.hide();
      });
  }

}
