import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
    (auth: boolean) => {
      this.authenticated = auth;
    }
    )
  }

  logout(): void {
    const token = localStorage.getItem('jwt');

    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    this.http.post('http://127.0.0.1:8000/api/logout', {}, httpOptions)
    .subscribe( () => {
      localStorage.removeItem('jwt');
      this.authenticated = false;
    });
  }
}
