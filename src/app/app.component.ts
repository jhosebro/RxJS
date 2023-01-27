import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty  } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, take} from 'rxjs/operators';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveXJS';

  constructor(private UsersService: UsersService) { }

  public ngOnInit(): void {
    this.UsersService.getUsers().subscribe( res => {
      console.log(res);
      
    })
  }
}

