import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS';
  obs: any;


  ngOnInit() {
    this.obs = Observable.create(function (observer: any) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    }
    );
  }

  rxJSFunction() {
      console.log('just before subscribe');

    this.obs.subscribe({
      next: (x:any) => console.log('got value ' + x),
      error: (err:any) => console.log('someting wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
  }

}
