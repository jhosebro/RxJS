import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URLBASE = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {}

  getUsers(){
    return this.http.get(this.URLBASE).pipe(
      map((users:any) => users.map((user:any) => {
        console.log(user);
        return {
          nombre : user.name,
          email : user.email,
          telefono : user.phone,
        }
      }))
    )
  }
}
