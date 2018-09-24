import { Injectable } from '@angular/core';
import { BoxService } from './box.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CombinedService {

  constructor(private boxService: BoxService) { }

  votingParams(params: any[]) {
    return forkJoin(
      this.boxService.list([params[0], params[1]]).pipe(catchError(error => error.error)),
      this.boxService.count(params[2]).pipe(catchError(error => error.error)),
    );
  }

}
