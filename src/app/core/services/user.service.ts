import { Injectable } from '@angular/core';
import { environement } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly Apiurl: string = `${environement.apiurl}/users/register`;


  constructor(
    private readonly http: HttpClient,
  ){}


  getAllUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.Apiurl);

  }

  getUserById(id: number):Observable<User>{

    return this.http.get<User>(`${this.Apiurl} / ${id}`);

  }

  registerUser(user: User): Observable<User>{

    return this.http.post<User>(this.Apiurl, user);

  }



}
