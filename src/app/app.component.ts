import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveXJS';

  constructor() {

  }

  public ngOnInit(): void {
    const contador = interval(1000);

    contador.subscribe((N) => {
      console.log('tick ' + N);
    });
  }
}
